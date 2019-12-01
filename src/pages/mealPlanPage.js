import React from "react";
import MealPlanSection from "../components/MealPlan/MealPlanSection";
import NavBar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Container } from "react-bootstrap";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";

const SavedMealPage = ({ user, dispatch, mealList }) => {
  return (
    <Container className="saved--meal--page" fluid={true}>
      <NavBar user={user} />
   
      <ProfileInfo user={user} />
      <MealPlanSection user={user} dispatch={dispatch} mealList={mealList} />
    
      <Footer />
    </Container>
  );
};

export default SavedMealPage;
