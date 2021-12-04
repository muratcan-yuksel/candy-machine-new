import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/examples.css";
import { useMediaQuery } from "react-responsive";
import { Divider } from "@material-ui/core";

const Examples = (props: any) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div id="examplesDiv">
      {/* 2 rows 3 images */}
      {isDesktopOrLaptop && (
        <div>
          {" "}
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <div className="ExampleImageContainer">
                <img className="ExampleImage" src={props.firstPicture} alt="" />
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <div className="ExampleImageContainer">
                <div className="ExampleImage"></div>
              </div>
            </Col>{" "}
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <div className="ExampleImageContainer">
                <div className="ExampleImage"></div>
              </div>
            </Col>{" "}
          </Row>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <div className="ExampleImageContainer">
                <div className="ExampleImage"></div>
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <div className="ExampleImageContainer">
                <div className="ExampleImage"></div>
              </div>
            </Col>{" "}
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <div className="ExampleImageContainer">
                <div className="ExampleImage"></div>
              </div>
            </Col>{" "}
          </Row>{" "}
        </div>
      )}
      {/* 3 rows 2 images */}
      {isTabletOrMobile && (
        <div>
          {" "}
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div className="ExampleImageContainerMobile">
                <div className="ExampleImage"></div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div className="ExampleImageContainerMobile">
                <div className="ExampleImage"></div>
              </div>
            </Col>{" "}
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div className="ExampleImageContainerMobile">
                <div className="ExampleImage"></div>
              </div>
            </Col>{" "}
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div className="ExampleImageContainerMobile">
                <div className="ExampleImage"></div>
              </div>
            </Col>
          </Row>{" "}
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div className="ExampleImageContainerMobile">
                <div className="ExampleImage"></div>
              </div>
            </Col>{" "}
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div className="ExampleImageContainerMobile">
                <div className="ExampleImage"></div>
              </div>
            </Col>
          </Row>{" "}
        </div>
      )}
    </div>
  );
};

export default Examples;

<div className="ExampleImageContainer">
  <div className="ExampleImage">Image</div>
</div>;
