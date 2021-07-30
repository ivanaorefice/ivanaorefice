import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavListElements } from './NavList.js'
import { Log } from './LogButtons.js';
import { BtnCreation } from './BtnCreation.js';

function UpperNavBar(props){
  if(props.showNav){
    return (
        <>
        <Navbar expand="lg" id='nav'>
          <Navbar.Brand id='navTitle'>MissMeme - Meme Generator App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <NavListElements id='navlistElemStyle' names = {props.names} 
              updateFilter = {props.updateFilter} all = {props.all}/>
              <NavLink  to="/create" id='navComp'>
                <BtnCreation all = {props.all} handleShow = {props.handleShow}/>
              </NavLink> 
            </Nav>
           <Log loggedIn = {props.loggedIn} login = {props.login} logout = {props.logout}/>
          </Navbar.Collapse>
        </Navbar>    
        </>
    )
  }
  else {
    return(<></>);
  }
}

export { UpperNavBar };