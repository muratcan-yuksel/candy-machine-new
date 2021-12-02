import React from "react";
import "../styles/landing.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <div id="landingPage">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div id="landingImageContainer">
              <div id="landingImage">Image</div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div id="landingWelcomeGroup">
              <div>
                {/* Minting Section (Where the MINT button is):  */}
                <h2>Thousands of loveable llamas from the </h2>
                <h1>llamadramaclub</h1>
                <h2>are joining the NFT world January 2022.</h2>
                <Button variant="warning">MINT</Button>{" "}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="LandingFollows">
              <div id="followButtons">
                <span className="followButton">
                  <Button variant="warning">Twitter</Button>{" "}
                </span>
                <span className="followButton">
                  <Button variant="warning">Facebook</Button>{" "}
                </span>
                <span className="followButton">
                  <Button variant="warning">Instagram</Button>{" "}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
