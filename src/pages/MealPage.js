import React from "react";
import MealPlanSection from "../components/MealPlan/MealPlanSection";
import NavBar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Container } from "react-bootstrap";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
const MealPlan = ({ user, dispatch, mealList }) => {
  console.log('Dispatch',dispatch)
  return (
    <Container className="meal--page" fluid={true}>
      <NavBar user={user} />
   
      <ProfileInfo user={user} />
      <MealPlanSection user={user} dispatch={dispatch} mealList={mealList} />
    
      <Footer />
    </Container>
  );
};

export default MealPlan;
