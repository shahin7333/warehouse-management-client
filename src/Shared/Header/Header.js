import React from 'react'
import { signOut } from 'firebase/auth'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../../src/img/logo/logo.png'
import auth from '../../firebase.init'

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
   
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={30} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            

            
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/home">
             <small> Home</small>
            </Nav.Link>
           {
             user && 
             <>
              <Nav.Link as={Link} to="/manageItems"><small>Manage-Items</small></Nav.Link>
            <Nav.Link as={Link} to="/myItems"><small>My-Items</small></Nav.Link>
            <Nav.Link as={Link} to="/addItems"><small>Add-Items</small></Nav.Link>
             </>
           }
            <Nav.Link as={Link} to="/blog"><small>Blogs</small></Nav.Link>
            <Nav.Link as={Link} to="/about">
            <small>  About</small>
            </Nav.Link>
            {user ? 
              <button onClick={handleSignOut} className='logout-btn'><small>Log Out</small></button>
             : 
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
