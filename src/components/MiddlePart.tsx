import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/middlePart.css";

const MiddlePart = () => {
  return (
    <div id="middlePartDiv">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <div className="middleImgContainer">
            <div className="middleImage"></div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <h1>text</h1>
        </Col>
      </Row>
    </div>
  );
};

export default MiddlePart;
