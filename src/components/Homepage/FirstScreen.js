import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const aboutUs = () => {

  const footerButton = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    padding: "40px",
   
  };

  return (
    <Row style={{ minHeight: "80vh",marginTop:'150px',marginBottom:'150px'}} className="bg-white p-4 ">
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        lg={6}
        className=""
      >
        <header>
          <h1 style={{ fontSize: "60px" }}>Techfit</h1>
          <p style={{ fontSize: "30px" }}>
            To inspire healthy living in a sedentary world.
          </p>
        </header>
        <div style={{ fontSize: "30px" }} className="d-flex ">
          <span>Follow Us:</span>
          <div>
            <span className="ml-3 mr-3">
              <i className="fab fa-instagram"></i>
            </span>
            <span className="ml-3 mr-3">
              <i className="fab fa-facebook-square"></i>
            </span>
            <span className="ml-3 mr-3">
              <i className="fab fa-youtube-square"></i>
            </span>
          </div>
        </div>
        <footer style={footerButton}>
          <Button
            style={{ minWidth: "180px" }}
            size="lg"
            variant="outline-dark"
          >
            Leearn More
          </Button>
         <Link to='/register' ><Button style={{ minWidth: "180px" }} size="lg" variant="dark">
            Register
          </Button>
          </Link>
        </footer>
      </Col>
      <Col
        lg={6}
        className=" d-flex flex-column justify-content-center align-items-center"
      >
        <img src="images/about-us-app-display.png" alt="application" />
      </Col>
    </Row>
  );
};

export default aboutUs;
