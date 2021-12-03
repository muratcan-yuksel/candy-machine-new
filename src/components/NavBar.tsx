import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/navbar.css";
//import react responsive
import { useMediaQuery } from "react-responsive";
//import logos
import twitterLogo from "../assets/MdiTwitter.svg";
import youtubeLogo from "../assets/MdiYoutube.svg";

const NavBar = () => {
  //Off canbas config
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  //react responsive config
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  //enable offcanvas scrolling
  const handleShow = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(true);
  };
  return (
    <div>
      {isTabletOrMobile && (
        <Navbar id="navbarDiv" bg="light" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#landingPage" id="navbarTitle">
              llamadramaclub
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
              id="navbarToggle"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Offcanvas id="canvas" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="me-auto">
                    <Nav.Link href="#roadmapComponent">ROADMAP</Nav.Link>
                    <Nav.Link href="#creatorPartDiv">CREATOR</Nav.Link>
                    <Nav.Link href="#aboutPage">ABOUT</Nav.Link>
                    {/* <Nav.Link href="#link">FUZZIES LOGO</Nav.Link> */}
                    <Nav.Link href="#link">
                      {" "}
                      <img src={youtubeLogo} alt="" />
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <img src={twitterLogo} alt="" />
                    </Nav.Link>
                    {/* <Button variant="warning">Warning</Button>{" "} */}
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      {isDesktopOrLaptop && (
        <Navbar id="navbarDiv" bg="light" expand="lg" fixed="top">
          <Container id="navbarContainer" fluid>
            <Navbar.Brand href="#landingPage">
              {" "}
              <p className="navLink " id="navbarTitle">
                llamadramaclub
              </p>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
            />
            <Nav className="ms-auto">
              <Nav.Link href="#roadmapComponent">
                <p className="navLink">ROADMAP</p>
              </Nav.Link>
              <Nav.Link href="#creatorPartDiv">
                {" "}
                <p className="navLink">Creator</p>
              </Nav.Link>
              <Nav.Link href="#aboutPage">
                {" "}
                <p className="navLink">About</p>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                {/* <p className="navLink">Logo</p> */}
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <p className="navLink">
                  {" "}
                  <img src={youtubeLogo} alt="" />
                </p>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <p className="navLink">
                  {" "}
                  <img src={twitterLogo} alt="" />
                </p>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default NavBar;
