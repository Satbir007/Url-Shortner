import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">URL-Shortner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <LinkContainer to="/">
              <Nav.Link> Home </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  );
}

export default MainNavigation;