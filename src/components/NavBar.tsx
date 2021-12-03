import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/navbar.css";
//import react responsive
import { useMediaQuery } from "react-responsive";
const NavBar = () => {
  //Off canbas config
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //react responsive config
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <div>
      {isTabletOrMobile && (
        <Navbar id="navbarDiv" bg="light" expand="lg" fixed="top">
          <Container fluid>
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
      )}

      {isDesktopOrLaptop && (
        <Navbar id="navbarDiv" bg="light" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#home">
              {" "}
              <p className="navLink">Home</p>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
            />
            <Nav.Link href="#home">
              <p className="navLink">ROADMAP</p>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <p className="navLink">Creator</p>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <p className="navLink">About</p>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <p className="navLink">Logo</p>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <p className="navLink">Youtube</p>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <p className="navLink">Twitter</p>
            </Nav.Link>
            <Button variant="warning">Warning</Button>{" "}
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
      )}
      {/* else */}
      {/* <Navbar id="navbarDiv" bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            {" "}
            <p className="navLink">Home</p>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Nav.Link href="#home">
            <p className="navLink">ROADMAP</p>
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <p className="navLink">Creator</p>
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <p className="navLink">About</p>
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <p className="navLink">Logo</p>
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <p className="navLink">Youtube</p>
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <p className="navLink">Twitter</p>
          </Nav.Link>
          <Button variant="warning">Warning</Button>{" "}
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
      </Navbar> */}
    </div>
  );
};

export default NavBar;
