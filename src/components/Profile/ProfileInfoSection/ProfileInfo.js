import React from "react";
import {
  Row,
  Col,
  Button,
  Accordion,
  Card,
  ButtonToolbar
} from "react-bootstrap";
import { Link } from "react-router-dom";
import UserInfoForm from "./UserInfoForm";
const imageStyle = { height: "100px", width: "100px", marginBottom: "40px" };

const ProfileInfo = ({ user }) => {
  
  return (
    user && (
      <Row
        style={{ marginTop: "100px", borderBottom: "1px solid black" }}
        className="p-5 text-center"
      >
        <Col lg={2}>
          <img
            className="rounded-circle"
            src={user.image_url}
            alt="Profile"
            style={imageStyle}
          ></img>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
        </Col>
        <Col lg={4}>
          <Accordion className="mt-2 mb-2">
            <Card style={{ backgroundColor: "#f3f3f3", borderRadius: "10px" }}>
              <Card.Header>
                <Accordion.Toggle eventKey="0" style={{ color: "black" }}>
                  <span>Update User Info </span>{" "}
                  <i className="far fa-address-card"></i>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <UserInfoForm user={user} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col lg={3}></Col>
        <Col lg={3} style={{ textAlign: "right" }}>
          <ButtonToolbar className="mt-3">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/meal-plan"
            >
              {" "}
              <Button
                variant="secondary"
                size="sm"
                style={{ marginRight: "15px", height: "50px", width: "100px" }}
              >
                Meal Plan
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/fitness-page"
            >
              {" "}
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ marginRight: "15px", height: "50px", width: "100px" }}
              >
                Fitness Plan
              </Button>
            </Link>
          </ButtonToolbar>
        </Col>
      </Row>
    )
  );
};

export default ProfileInfo;
