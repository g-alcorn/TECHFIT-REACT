import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import MealPlanSection from "../components/MealPlan/MealPlanSection";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
import FitnessPlanSection from "../components/FitnessPlan/FitnessPlanSection";
/* import Tracker from "../components/liquids/Tracker.js";
import Chart from "../components/liquids/Chart.js"; */

export default function Profile({ dispatch, user, workoutList }) {
  return (
    <Container className="" fluid={true}>
      <Navbar user={user} />
      <ProfileInfo  user={user} />

      <Row style={{ borderBottom: "1px solid black" }}>
        <Col lg={12}>
          <FitnessPlanSection user={user} workoutList={workoutList} dispatch={dispatch} />
    
        </Col>
     
      </Row>
     
      <Footer />
    </Container>
  );
}
