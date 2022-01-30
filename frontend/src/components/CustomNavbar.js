import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React, {useState} from 'react';
import { authentication } from '../loginEndpoint/FirebaseConfig';


// import NavDropdown from 'react-bootstrap/NavDropdown';

function signout(){
  console.log("in logout");
  authentication.signOut();
}

function CustomNavbar() {
    const [isSignedIn,setIsSignedIn] = useState(false);
    authentication.onAuthStateChanged((user)=>{
      if(user){
        setIsSignedIn(true);
      }
      else{
        setIsSignedIn(false);
      }
    })

    console.log("isSignedIn:" + isSignedIn);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand href="/">MockPostie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/create">Create</Nav.Link>
            {
              isSignedIn
              ?
              <Nav.Link onClick={signout}>Logout</Nav.Link>
              :
              <Nav.Link href="/login">Login/SignUp</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
