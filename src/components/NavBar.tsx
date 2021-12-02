import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">ROADMAP</Nav.Link>
              <Nav.Link href="#link">CREATOR</Nav.Link>
              <Nav.Link href="#link">ABOUT</Nav.Link>
              <Nav.Link href="#link">FUZZIES LOGO</Nav.Link>
              <Nav.Link href="#link">YOUTUBE</Nav.Link>
              <Nav.Link href="#link">TWITTER</Nav.Link>
              <Button variant="warning">Warning</Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
