import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <div className="menu">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="#home" className="link text-primary">
                Home
              </Nav.Link>
              <Nav.Link href="#ourWork" className="text-primary link">
                Our work
              </Nav.Link>
              <Nav.Link href="#iCanHelp" className="text-primary link">
                I can help
              </Nav.Link>
              <Nav.Link href="#iNeedHelp" className="text-primary link">
                I need help
              </Nav.Link>
              <Nav.Link href="#ourTeam" className="text-primary link">
                Our team
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Menu;
