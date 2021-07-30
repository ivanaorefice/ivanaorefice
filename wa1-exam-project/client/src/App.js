import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { loadPublicMemes, loadMemesByFilter, addNewMeme, deleteM, copyM, logIn, signUp, logOut } from './API.js';

// Components imports

import { UpperNavBar } from './Components/UpperNavBar.js';
import { MemeContainer } from './Components/MainSection.js';
import { ModalWindowCopy } from './Components/ModalWindowCopy.js';
import { ModalWindowView } from './Components/ModalWindowView.js';
import { CreateNewMeme } from './Components/CreateNewMeme.js';
import { Login } from './Components/Login.js';
import { Signup } from './Components/Signup.js';

const filterNames = ['all', 'public', 'protected'];

function App() {

  const [activeFilter, setActiveFilter] = useState ();
  const [activeMemes, setActiveMemes] = useState([]);
  const [render, setRender] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false); // at the beginning, no user is logged in, so loggedIn must be false
  const [flagTimeLogin, setFlagTimeLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [all, setAll] = useState(false); 
  const [userId, setUserId] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleShow = () =>{
    setModalShow(true);
  }

  // USE EFFECTS

  useEffect( () =>{  
    if(render === true){
      if(!loggedIn){
        loadPublicMemes().then(Memes => {
          setActiveMemes(Memes)
          setRender(false);
        });
      } else {
        loadMemesByFilter(activeFilter).then(Memes => {
          setActiveMemes(Memes)
          setRender(false);
          setAll(true);
        });  
      }        
    }    
  },[render, loggedIn, activeFilter]);  

  useEffect( () => {
    if(!loggedIn){
      loadPublicMemes().then(Memes => {
        setActiveMemes(Memes)
        setRender(false);
      });
    }
  }, [loggedIn]);

  useEffect(() =>{
    if(loggedIn === false && signedUp === true)
       setSignedUp(false);
  }, [loggedIn, signedUp]);

  const doSignUp = (credentials) => {
    signUp(credentials).then((err)=>{
      setSignedUp(true);
    });
  }

  const doLogIn = async (credentials) => {
    try {
      const user = await logIn(credentials);
      setLoggedIn(true);
      setRender(true);
      setShowNav(true);
      setUserId(`${user.id}`);
      const userName = `${user.name}`;
      loginAlert(userName);
    } catch(err) {
      window.alert('Incorrect username and/or password');
    }
  }

  const doLogOut = async () => {
    await logOut();
    setLoading(true);
    setLoggedIn(false);
    setRender(false);
    setAll(false);
    if(flagTimeLogin === false){
      document.getElementById('alert').style.display = 'none';
    }
  }

  const loginAlert = (userName) => {
    let box = document.createElement('span');
    box.id = 'alert';
    box.style.position = 'fixed';
    box.style.left = '80%';
    box.style.bottom = '10%';
    box.style.backgroundColor = 'rgb(0, 0, 128)';
    box.style.padding = '1%';
    box.style.fontSize = '200%';
    box.style.border = '2px solid white';
    box.style.fontFamily = 'initial';
    box.style.color = 'white';
    box.innerHTML = 'Welcome ' + userName + '!';
    document.getElementById('root').appendChild(box);
    setFlagTimeLogin(false);
    hideAlert();
  }
  
  const hideAlert = () => {
    setTimeout(function(){ 
      document.getElementById('alert').remove();
      setFlagTimeLogin(true);
    }, 2000);
  }

  const updateFilter = (newOne)=> {
    if(newOne !== activeFilter ){
      setActiveFilter(newOne);
      setRender(true);
    }
  };

  const addMeme = (meme) => {
    addNewMeme(meme).then((err) => { 
      setRender(true); 
    });
  }

  const deleteMeme = (id) => {
    deleteM(id).then((err) => { 
      setRender(true);
    });
  }

  const copyMeme = (newMeme) => {
    copyM(newMeme).then((err) => { 
      setRender(true); 
      //setLoading(true);
    });
  }

  return (    
    <Router>         
      <UpperNavBar names = {filterNames} updateFilter={updateFilter} handleShow = {handleShow}
      login = {doLogIn} logout = {doLogOut} loggedIn = {loggedIn} loading = {loading} showNav = {showNav}
      all = {all} /> 
      <Container fluid id='mainCont'>
        <Row>
          <Switch>
          <Route exact path='/' render={() =>
              <MemeContainer memes = {activeMemes} updateFilter = {updateFilter} activeFilter = {activeFilter} 
              addMeme = {addMeme} deleteMeme = {deleteMeme} handleShow = {handleShow}
              setModalShow={(value) => setModalShow(value)} loggedIn = {loggedIn} copyMeme = {copyMeme}/> 
            }/>
          <Route path = {'/' + activeFilter}>
              <MemeContainer memes = {activeMemes} updateFilter = {updateFilter} activeFilter = {activeFilter} 
              addMeme = {addMeme} deleteMeme = {deleteMeme} handleShow = {handleShow}
              setModalShow={(value) => setModalShow(value)} loggedIn = {loggedIn} copyMeme = {copyMeme} /> 
            </Route>
            <Switch>
              <Route path='/view'>
                <ModalWindowView memes = {activeMemes} show = {modalShow} 
                onHide={() => setModalShow(false)} all = {all} loggedIn = {loggedIn}/>
              </Route>
              <Route path='/create'>
                <CreateNewMeme show = {modalShow} onHide={() => setModalShow(false)}
                setModalShow = {(value) => setModalShow(value)} addMeme = {addMeme} 
                prevPath = {activeFilter} handleShow={handleShow} userId = {userId}/>
              </Route>
              <Route path='/copy'> 
                <ModalWindowCopy show = {modalShow} copyMeme = {copyMeme} 
                onHide={() => setModalShow(false)} userId = {userId} />
              </Route>
              <Route path="/login">
                {loggedIn ? <Redirect to="/" /> : <Login login = {doLogIn} showNav = {showNav}
                setShowNav = {(value) => setShowNav(value)}/>}
              </Route> 
              <Route path="/signup">
                <Signup signUp={doSignUp} isSignedUp={signedUp}/>
              </Route>  
            </Switch>
          </Switch>
        </Row>
      </Container>
    </Router> 
  );
}

export default App;