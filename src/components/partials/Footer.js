import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  const rowStyle = { minHeight: "300px" };
  return (
    <Fragment>
      <Row style={rowStyle} className=" p-4 border">
        <Col className="text-center mt-3" lg="4">
          <h5 style={{ fontSize: "40px" }}>Techfit</h5>
          <p style={{ fontSize: "20px" }}>Solutions & Support</p>
        </Col>
        <Col className="text-center mt-3" lg="4">
          <h5 style={{ fontSize: "40px" }}>Call Us</h5>
          <p style={{ fontSize: "20px" }}>+1 (514) 348-6377</p>
          <p style={{ fontSize: "20px" }}>+1 (514) 348-3663</p>
          <p style={{ fontSize: "20px" }}>+1 (514) 348-8324</p>
        </Col>
        <Col className="text-center mt-3" lg="4">
          <h5 style={{ fontSize: "40px" }}>Write Us</h5>
          <p style={{ fontSize: "20px" }}>support@techfit.com</p>
          <p style={{ fontSize: "20px" }}>getfit@techfit.com</p>
        </Col>
      </Row>
      <Row className="bg-dark pt-3 pb-3">
        <Col lg="12">
          <span className="text-white">Created with love by the Techfit Team </span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Footer;
