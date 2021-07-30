import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

function Signup(props) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
      event.preventDefault();
      const credentials = { name, email, password };
      
      let valid = true;
      if( name === '' || password === '' || email === '' ){
        valid = false;
        window.alert('Please, fill all the fields');
      }

      else if (password.length < 6){
        valid = false;
        window.alert(`Password is too short, please insert at least 6 characters`)
      }

      if(valid){
        if(ValidateEmail(email)) {
          props.signUp(credentials);
          window.alert(`Welcome, ${credentials.name}! Login to start having fun!`)
        }
      }

      function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
          return (true)
        }
        window.alert("You have entered an invalid email address!")
        return (false)
      }
  };

  return (
    <>
      <div id='centeredDiv'>
        <div>
          <h1 style={{textAlign:'center', marginTop:'5%'}} >SignUp Form</h1>
        </div>
        <div className='divForm'>
          <Form className='formStyle' style={{textAlign:'center'}}>
            <Form.Group controlId='email'>
                <Form.Label className='labelStyle'>Email</Form.Label>
                <Form.Control placeholder='Insert your email' className='inputStyle' type='email' value={email} onChange={ev => setEmail(ev.target.value)} />
            </Form.Group>
            <Form.Group controlId='name'>
                <Form.Label className='labelStyle'>Name</Form.Label>
                <Form.Control placeholder='Insert your name' className='inputStyle' type='text' value={name} onChange={ev => setName(ev.target.value)} />
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label className='labelStyle'>Password</Form.Label>
                <Form.Control placeholder='Insert a new password' className='inputStyle' type='password' value={password} onChange={ev => setPassword(ev.target.value)} />
            </Form.Group>
            {props.isSignedUp && <Redirect to='/login' />}
            <Button variant="success" onClick={handleSubmit}>SignUp</Button>
            <p style={{marginTop:'10%'}}>Are you already registered?<br />Go to <Link to='/login'>Login</Link> page</p>
          </Form>
        </div>
      </div>
    </>
    )
}

export { Signup } ;