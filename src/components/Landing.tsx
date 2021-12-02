import React from "react";
import "../styles/landing.css";
import { Container, Row, Col } from "react-bootstrap";

const Landing = () => {
  return (
    <div>
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
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
