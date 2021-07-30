'use strict';

const express = require('express');
const morgan = require('morgan');
const session = require('express-session'); // SESSION MW

const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcryptjs');

const memeDao = require('./meme-dao.js');
const userDao = require('./user-dao.js');

// init express
const app = new express();
const PORT = 3001;

// Custom MW: check if a given request is coming from an authenticated user
const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated())
      return next();

  return res.status(401).json({ error: 'not authenticated'});
}

// set up authentication process

passport.use(new passportLocal.Strategy((username,password,done)=>{
  userDao.getUserByCredentials(username, password).then(user =>{
      if (user)
          done(null,user); // we send the user if no error
      else
      // if error we send login fail message
          done(null,false,{message: 'Username or password wrong'});
  }).catch(err => {
      // we send the database error
      done(err);
  });
}));

// serialize and de-serialize the user (user object <-> session)
// Serialize the user ID and store it in the session: the session is very small in this way
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Extracting the current logged user
passport.deserializeUser( (id,done) => {
  userDao.getUserByID(id).then(user => {
    done(null, user); // this will be available in req.user
  }).catch(err => {
    done(err, null);
  });
});

app.use(morgan('dev'));
app.use(express.json()); // parse the body in JSON format => populate req.body attributes

// initialize and configure HTTP sessions
app.use(session({
  secret: 'a giant secret',
  resave: false,
  saveUninitialized: false
}));

// tell passport to use session cookies
app.use(passport.initialize());
app.use(passport.session());

// Retrieve the list of all the available memes;

app.get('/api/memes', (req, res) => {
    memeDao.getAllMemes()
      .then((MemeList) => { res.json(MemeList); })
      .catch((error) => { res.status(500).json(error); });
})

// List of public memes

app.get('/api/filteredMemes/public', (req, res) => {
  memeDao.getPublicMemes()
    .then((Memes) => { 
      res.json(Memes); 
    }).catch((error) => { 
      res.status(500).json(error); 
    });
});

// List of all Tasks given a certain filter

app.get('/api/filteredMemes/:filter', (req, res) => {
    memeDao.getFilteredMemes(req.params.filter)
      .then((MemeListFiltered) => { 
        res.json(MemeListFiltered); 
      }).catch((error) => { 
        res.status(500).json(error); 
      });
});

// Retrieve a meme, given its ID

app.get('/api/memes/:id', async (req, res) => {
  const id = req.params.id;
  try {
      let meme = await memeDao.getMemeById(id);
      res.json(meme);
  } catch (error) {
      res.status(500).json(error);
  }
});

// Create a new meme, by providing all relevant information – except the “id” that will be automatically 
// assigned by the back-end;

app.post('/api/memes', async (req, res) => {
  let title = req.body.title;
  let img = req.body.img;
  let sentence1 = req.body.sentence1;
  let sentence2 = req.body.sentence2;
  let sentence3 = req.body.sentence3;
  let visibility = req.body.visibility;
  let font = req.body.font;
  let color = req.body.color;
  let creator_id = req.body.creator_id;

  try {
      await memeDao.createMeme({ 
          title: title,
          img: img,
          sentence1: sentence1,
          sentence2: sentence2,
          sentence3: sentence3,
          visibility: visibility,
          font: font,
          color: color,
          creator_id: creator_id 
        });
      res.end();
  } catch (error) {
      res.status(500).json(error);
  }
});

// Copy a meme

app.post('/api/copyMemes', async (req, res) => {
  let title = req.body.title;
  let img = req.body.img;
  let sentence1 = req.body.sentence1;
  let sentence2 = req.body.sentence2;
  let sentence3 = req.body.sentence3;
  let visibility = req.body.visibility;
  let font = req.body.font;
  let color = req.body.color;
  let creator_id = req.body.creator_id;

  try {
      await memeDao.copyTheMeme({ 
          title: title,
          img: img,
          sentence1: sentence1,
          sentence2: sentence2,
          sentence3: sentence3,
          visibility: visibility,
          font: font,
          color: color,
          creator_id: creator_id 
        });
      res.end();
  } catch (error) {
      res.status(500).json(error);
  }
});

// Delete an existing meme, given its ID

app.delete('/api/deleteMeme/:id', async (req, res) => {
  const id = req.params.id;
  try {
      await memeDao.deleteMeme(id);
      res.end();
  } catch (error) {
      res.status(500).json(error);
  }
});

// POST /sessions --> login
app.post('/api/sessions', function(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);
      if (!user) {
        // display wrong login messages
        return res.status(401).json(info);
      }
      // success, perform the login
      req.login(user, (err) => {
        if (err)
          return next(err);
        
        // req.user contains the authenticated user, we send all the user info back
        // this is coming from userDao.getUser()
        return res.json(req.user);
      });
  })(req, res, next);
});

// DELETE /sessions/current --> logout
app.delete('/api/sessions/current', (req, res) => {
  req.logout();
  res.end();
});

app.post('/api/signup', async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  const hash = bcrypt.hashSync(req.body.password, 10);
    try {
        await userDao.signUpNewUser ({ 
            email : email,            
            pwd_hash : hash,
            name : name
        });
        res.end();
    } catch (error) {
        res.status(500).json(error);
  }
});

// Activate the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});