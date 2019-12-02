import React, { useEffect } from "react";
import { Container, Col, Row} from "react-bootstrap";

import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";

import Tracker from "../components/liquids/Tracker";
import Incrementer from "../components/liquids/Incrementer";
import LiquidBar from "../components/liquids/LiquidBar";
import LiquidPie from "../components/liquids/LiquidPie";

import useDrinksTracking from "../hooks/useDrinksTracking";
import axios from 'axios';

export default function Profile({ dispatch, user, drinkCounts }) {
  const { handleCountSave } = useDrinksTracking();

  const handleCountChange = (event) => {
    event.preventDefault();
    const target = event.currentTarget.className;
    const drinkType = target.split("-")[0];
    const operation = target.split("-")[1];
    handleCountSave(dispatch, user.id, drinkType, operation);
  }

  return (
    <Container className="profile--page" fluid={true}>
      <Navbar user={user} />
      <ProfileInfo  user={user} />

      <Row style={{ borderBottom: "1px solid black" }}>
        <Col lg={4} style={{ borderRight: "1px solid black" }}>
          <Tracker
            waterCounter={
            <Incrementer 
              name={'water'} 
              count={drinkCounts.waterCount}
              handleIncrease={handleCountChange}
              handleDecrease={handleCountChange}
            />}
            coffeeCounter={
            <Incrementer 
              name={'coffee'} 
              count={drinkCounts.coffeeCount}
              handleIncrease={handleCountChange}
              handleDecrease={handleCountChange}
            />}
            sodaCounter={
            <Incrementer 
              name={'soda'} 
              count={drinkCounts.sodaCount}
              handleIncrease={handleCountChange}
              handleDecrease={handleCountChange}
            />}
            otherCounter={
            <Incrementer 
              name={'other'} 
              count={drinkCounts.otherCount}
              handleIncrease={handleCountChange}
              handleDecrease={handleCountChange}
            />}
            />
          </Col>
          <Col lg={8}>
            <h3 className="text-center" style={{ marginTop: "15px" }}>
              {" "}
              Liquid Consumption Chart 
            </h3>
            {user && (
              <Row>
                <Col>
                  <LiquidBar user={user}/>
                </Col>
                
                <Col>
                  <LiquidPie user={user}/>
                </Col>
              </Row>              
            )}
          </Col>
      </Row>
     
      <Footer />
    </Container>
  );
}


