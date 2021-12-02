import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/navbar.css";
const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar id="navbarDiv" bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Offcanvas id="canvas" show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <Nav.Link href="#home">ROADMAP</Nav.Link>
                  <Nav.Link href="#link">CREATOR</Nav.Link>
                  <Nav.Link href="#link">ABOUT</Nav.Link>
                  <Nav.Link href="#link">FUZZIES LOGO</Nav.Link>
                  <Nav.Link href="#link">YOUTUBE</Nav.Link>
                  <Nav.Link href="#link">TWITTER</Nav.Link>
                  <Button variant="warning">Warning</Button>{" "}
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
