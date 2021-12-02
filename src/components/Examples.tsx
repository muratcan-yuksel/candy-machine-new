import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/examples.css";

const Examples = () => {
  return (
    <div id="examplesDiv">
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="ExampleImageContainer">
            <div className="ExampleImage"></div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="ExampleImageContainer">
            <div className="ExampleImage"></div>
          </div>
        </Col>{" "}
      </Row>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="ExampleImageContainer">
            <div className="ExampleImage"></div>
          </div>
        </Col>{" "}
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="ExampleImageContainer">
            <div className="ExampleImage"></div>
          </div>
        </Col>
      </Row>{" "}
      {/* <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="ExampleImageContainer">
            <div className="ExampleImage"></div>
          </div>
        </Col>{" "}
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="ExampleImageContainer">
            <div className="ExampleImage"></div>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};

export default Examples;

<div className="ExampleImageContainer">
  <div className="ExampleImage">Image</div>
</div>;
