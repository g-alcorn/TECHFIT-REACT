import React from "react";
import MealPlanSection from "../components/MealPlan/MealPlanSection";
import NavBar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Container } from "react-bootstrap";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
const MealPlan = ({ dispatch, user, mealList }) => {
  console.log('Dispatch',dispatch)
  return (
    <Container className="" fluid={true}>
      <NavBar user={user} />
   
      <ProfileInfo user={user} />
      <MealPlanSection dispatch={dispatch} mealList={mealList}  user={user} />
    
      <Footer />
    </Container>
  );
};

export default MealPlan;
