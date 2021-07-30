import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props){

    // STATE VARIABLES
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    setTimeout( () => props.setShowNav(false), 200 );

    const handleSubmit = (event) => {
        event.preventDefault();
        const credentials = { username, password };
        
        let valid = true;
        if(username === '' || password === '' || password.length < 6)
            valid = false;
        
        if(valid){
          props.login(credentials);
        }
        else {
          window.alert('Incorrect username and/or password');
        }
    };

    const handleBack = () => {
        props.setShowNav(true);
    }
  
    return (
        <div id='centeredDiv'>
            <div>
                <h1 style={{textAlign:'center', marginTop:'5%'}} >Login as a Creator</h1>
            </div>
            <div className='divForm' style={{textAlign:'center'}}>
                <Form className='formStyle'>
                    <Form.Group controlId='username'>
                        <Form.Label className='labelStyle'>Email</Form.Label>
                        <Form.Control className='inputStyle' placeholder='Enter your eMail' type='email' value={username} onChange={ev => setUsername(ev.target.value)} />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label className='labelStyle'>Password</Form.Label>
                        <Form.Control className='inputStyle' placeholder='Enter your password' type='password' value={password} onChange={ev => setPassword(ev.target.value)} />
                    </Form.Group>
                    <div>
                        <Button variant="success" onClick={handleSubmit}>SignIn</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Link to='/signup'><Button variant='secondary'>SignUp</Button></Link>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                        <Link to ="/" >
                            <Button variant="secondary" onClick={handleBack}>Back to Homepage</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export { Login };