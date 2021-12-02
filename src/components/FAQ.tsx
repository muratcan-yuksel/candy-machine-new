import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/faq.css";

const FAQ = () => {
  return (
    <div id="faqComponent">
      <h1>FAQ</h1>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="faqTextContainer">
              <h2 className="faqTitle">Title</h2>
              <p className="faqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto adipisci debitis praesentium mollitia, sit eos
                voluptates maxime ab quae a veritatis quas ex velit veniam
                laborum esse reprehenderit exercitationem corrupti.
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="faqTextContainer">
              <h2 className="faqTitle">Title</h2>
              <p className="faqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto adipisci debitis praesentium mollitia, sit eos
                voluptates maxime ab quae a veritatis quas ex velit veniam
                laborum esse reprehenderit exercitationem corrupti.
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="faqTextContainer">
              <h2 className="faqTitle">Title</h2>
              <p className="faqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto adipisci debitis praesentium mollitia, sit eos
                voluptates maxime ab quae a veritatis quas ex velit veniam
                laborum esse reprehenderit exercitationem corrupti.
              </p>
            </div>
          </Col>{" "}
        </Row>{" "}
      </Container>
    </div>
  );
};

export default FAQ;
