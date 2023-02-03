import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import LoginContext from "../store/login-context";


function MainNavigation() {

  const [user, setUser] = useContext(LoginContext);

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    console.log("User value is ")
  }

  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">URL-Shortner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" justify-content-end" style={{ width: "100%" }}>
        <LinkContainer to="/Url-Shortner">
               <Nav.Link> Home </Nav.Link>
            </LinkContainer>
             <LinkContainer to="/Url-Shortner/About">
               <Nav.Link>About Us</Nav.Link>
             </LinkContainer>
             <LinkContainer to="/Url-Shortner/Contact">
               <Nav.Link>Contact</Nav.Link>
             </LinkContainer>
          <Button variant='outline-dark' onClick={(e)=>{handleSignOut(e)}}>LogOut</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default MainNavigation;