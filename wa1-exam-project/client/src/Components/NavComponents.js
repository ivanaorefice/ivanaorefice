import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavListElements } from './NavList.js'
import { Log } from './LogButtons.js';

function NavComponents(props){
    if(!props.showNavElem){
        return (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavListElements id='navlistElemStyle' names = {props.names} updateFilter = {props.updateFilter} />
              <NavLink  to="/create" id='navComp'>
                <Button id='noStyleBtn' onClick={() => props.handleShow(true)}>Create</Button>
              </NavLink>
            </Nav>
           <Log loggedIn = {props.loggedIn} login = {props.login} logout = {props.logout}/>
          </Navbar.Collapse>
        );
    }
    else {
        return (
            <></>
        );
    }
}

export { NavComponents };