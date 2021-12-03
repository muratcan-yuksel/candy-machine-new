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
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle">Resale</h2>
                <p className="roadmapText">
                  Collectors will be able to grab llamas at a special discounted
                  price with no mint limit.
                </p>
                <p className="roadmapText">5,000 llamas will be released.</p>
              </div>
            </Col>{" "}
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
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
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
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
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
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
          </Row>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle"> Tesla Giveaway</h2>
                <p className="roadmapText">
                  That’s right! At 100% We will be giving away a Tesla! - Follow
                  Twitter, FB, Insta
                </p>
              </div>
            </Col>{" "}
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle">Title</h2>
                <p className="roadmapText">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto adipisci debitis praesentium mollitia, sit eos
                  voluptates maxime ab quae a veritatis quas ex velit veniam
                  laborum esse reprehenderit exercitationem corrupti.
                </p>
              </div>
            </Col>{" "}
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <div className="roadmapTextContainer">
                <h2 className="roadmapTitle">Title</h2>
                <p className="roadmapText">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto adipisci debitis praesentium mollitia, sit eos
                  voluptates maxime ab quae a veritatis quas ex velit veniam
                  laborum esse reprehenderit exercitationem corrupti.
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
