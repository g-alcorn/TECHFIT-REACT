import React from "react";
import { Container, Col, Row, Card, Accordion, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom"
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
import UserInfoForm from "../components/Profile/ProfileInfoSection/UserInfoForm";
import MealPlanSection from "../components/MealPlan/MealPlanSection";
import Tracker from "../components/liquids/Tracker";
import Incrementer from "../components/liquids/Incrementer";
import LiquidBar from "../components/liquids/LiquidBar";
import LiquidPie from "../components/liquids/LiquidPie";

export default function Profile({ dispatch, user, mealList }) {
  const imageStyle = { height: "100px", width: "100px", marginBottom: "40px" };

  function handleIncrease(event) {
    console.log(event);
  }

  function handleDecrease(event) {
    console.log(event);
  }

  /*
      <Row
      style={{ marginTop: "100px", borderBottom: "1px solid black" }}
      className="p-5 text-center"
      >
        <Col lg={2}>
          <img className='rounded-circle' src={user.image_url} alt="Profile" style={imageStyle}></img>
            <h3>{user.first_name} {user.last_name}</h3>
        </Col>
        <Col lg={4}>
          <Accordion className='mt-2 mb-2'>
            <Card style={{ backgroundColor: "#f3f3f3",borderRadius:'10px' }}>
              <Card.Header>
                <Accordion.Toggle
                
                
                  eventKey="0"
                  style={{ color: "black" }}
                >
              <span >Update User Info </span> <i className="far fa-address-card"></i>
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
          <ButtonToolbar className='mt-3'>
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
              to="/fitness-plan"
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

  */

  return (
    <Container className="" fluid={true}>
      <Navbar user={user} />
      <ProfileInfo  user={user} />

      <Row style={{ borderBottom: "1px solid black" }}>
        <Col lg={4} style={{ borderRight: "1px solid black" }}>
          <Tracker
            waterCounter={() =>
            <Incrementer 
              name={'Water '} 
              user={user}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />}
            coffeeCounter={() =>
            <Incrementer 
              name={'Coffee'} 
              user={user}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />}
            sodaCounter={() =>
            <Incrementer 
              name={'Soda '} 
              user={user}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />}
            otherCounter={() =>
            <Incrementer 
              name={'Other '} 
              user={user} 
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />}
            />
          </Col>
          <Col lg={8}>
            <h3 className="text-center" style={{ marginTop: "15px" }}>
              {" "}
              Liquid Consumption Chart
            </h3>
            <Row>
            <Col>
              <LiquidBar />
            </Col>
            
            <Col>
              <LiquidPie />
            </Col>
            </Row>
          </Col>
      </Row>
     
      <Footer />
    </Container>
  );
}


