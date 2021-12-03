import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/roadmap.css";

const Roadmap = () => {
  return (
    <div id="roadmapComponent">
      <h1>RoadMap</h1>
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle">Resale</h2>
                <p className="roadmapText">
                  Collectors will be able to grab llamas at a special discounted
                  price with no mint limit.
                </p>
                <p className="roadmapText">5,000 llamas will be released.</p>
              </div>
            </Col>{" "}
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle">Launch day</h2>
                <p className="roadmapText">
                  If you missed out on the presale, don’t worry!
                </p>
                <p className="roadmapText">
                  5,000 more llamas will be released on launch day.
                </p>
              </div>
            </Col>{" "}
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle">Videogame drop</h2>
                <p className="roadmapText">
                  At 75%, we plan on launching development of our game world. We
                  cannot express enough how diverse our game launches will be.
                  Our goal is to create something for everyone to enjoy every
                  quarter. NFT holders will instantly gain freebies in games
                  once launched.
                </p>
              </div>
            </Col>{" "}
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle"> Tesla Giveaway</h2>
                <div className="roadmapText">
                  <p>
                    {" "}
                    That’s right! At 100% We will be giving away a Tesla! -
                    Follow Twitter, FB, Insta
                  </p>
                  <h3>Follow us on:</h3>
                  <Button variant="warning">Twitter</Button>{" "}
                  <Button variant="warning">Facebook</Button>{" "}
                  <Button variant="warning">Instagram</Button>{" "}
                </div>
              </div>
            </Col>{" "}
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle">Animated short films</h2>
                <p className="roadmapText">
                  We aren’t called the drama club for nothing. - Llamadramaclub
                  - plans on entertaining you with animated shorts that will
                  make you laugh, - and hopefully leave you wanting more. NFT
                  holders will gain early access to each episode before -
                  general public
                </p>
                <p className="roadmapText">
                  Llamadramaclub plans on entertaining you with animated shorts
                  that will make you laugh, and hopefully leave you wanting
                  more. NFT holders will gain early access to each episode
                  before general public
                </p>
              </div>
            </Col>
          </Row>{" "}
        </Container>
      </div>
    </div>
  );
};

export default Roadmap;
