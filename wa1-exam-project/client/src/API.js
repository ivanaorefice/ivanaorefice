const URL = 'http://localhost:3000';

async function loadMemes(){
    const response  = await fetch(URL + '/api/memes');
    const Memes  = await response.json();
    return Memes;
}

async function loadMemesByFilter(activeFilter){
    const response = await fetch(URL + '/api/filteredMemes/' + activeFilter);
    const Memes = await response.json();
    return Memes;
}

async function loadPublicMemes(){
  const response = await fetch(URL + '/api/filteredMemes/public');
  const Memes = await response.json();
  return Memes;
}

async function addNewMeme(meme) {
    let memeToAdd = {
        'title': meme.title ,
        'img': meme.img,
        'sentence1': meme.sentence1, 
        'sentence2': meme.sentence2,
        'sentence3': meme.sentence3, 
        'visibility': meme.visibility, 
        'font': meme.font,
        'color': meme.color,
        'creator_id': meme.creator_id 
    };

    const response = await fetch(URL + '/api/memes', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(memeToAdd)
      })
    if (response.ok) {
        return null;
    } else return { 'err': 'POST error' };
}

async function deleteM(id) {
    let deletePath = '/api/deleteMeme/' + id;

    const response = fetch(deletePath, {
        method: 'DELETE',
        headers: {
        'Content-Type' : 'application/json',
        }
    })

    if (response.ok) {
        return null;
    } else return { 'err': 'DELETE error' };
}

async function copyM(meme){
  let memeToCopy = {
    'title': meme.title ,
    'img': meme.img,
    'sentence1': meme.sentence1, 
    'sentence2': meme.sentence2,
    'sentence3': meme.sentence3, 
    'visibility': meme.visibility, 
    'font': meme.font,
    'color': meme.color,
    'creator_id': meme.creator_id 
  };

  const response = await fetch(URL + '/api/copyMemes', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(memeToCopy)
    })
  if (response.ok) {
      return null;
  } else return { 'err': 'POST error' };
}

async function logIn(credentials) {
    let response = await fetch('/api/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if(response.ok) {
      const user = await response.json();
      return user;
    }
    else {
      try {
        const errDetail = await response.json();
        throw errDetail.message;
      }
      catch(err) {
        throw err;
      }
    }
}

async function signUp(credentials) {
  let userToAdd = {
    'email' : credentials.email, 
    'name' : credentials.name, 
    'password' : credentials.password 
  };
  
  let response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userToAdd),
  });
  if (response.ok) {
    return null;
  } else return { 'err': 'POST error' };
}
  
async function logOut() {
    await fetch('/api/sessions/current', { method: 'DELETE' });
}

export { loadMemes, loadPublicMemes, loadMemesByFilter, addNewMeme, deleteM, copyM, logIn, signUp, logOut };