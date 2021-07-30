import { Button } from 'react-bootstrap';
import { iconLogin } from './icons.js'
import { Link } from 'react-router-dom';

function Log(props){
    if(props.loggedIn){
        return (
            <>
            <Link to='/'>
                <Button variant="danger" onClick={props.logout}>
                    {iconLogin} <span id='logoutSpan'>Logout</span>
                </Button>
            </Link>
            </>
        );
    } else {
        return (            
            <>
            <Link to='/login'>
                <Button variant="light">
                    {iconLogin} <span id='logoutSpan'>Login as a Creator</span>
                </Button>
            </Link>
            </>
        );
    }
}

export { Log };