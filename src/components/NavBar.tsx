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
import logo from "../assets/logo.png";

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
      <Navbar id="navbarDiv" bg="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#landingPage" id="navbarTitle">
            <img id="realLogo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#roadmapComponent">
                <p className="canvasLink">ROADMAP</p>
              </Nav.Link>
              <Nav.Link href="#aboutPage">
                {" "}
                <p className="canvasLink">ABOUT</p>
              </Nav.Link>
              <Nav.Link href="#faqComponent">
                {" "}
                <p className="canvasLink">FAQ</p>
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com/llamadramaclub"
                target="_blank"
              >
                {" "}
                <p className="canvasLink">Twitter</p>
              </Nav.Link>{" "}
              <Nav.Link
                href="https://www.youtube.com/channel/UCWbjIu44mFe536Mf76jGjlg"
                target="_blank"
              >
                {" "}
                <p className="canvasLink">Youtube</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
