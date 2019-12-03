import React  from "react";
import { Container, Col, Row} from "react-bootstrap";

import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
import SavedItems from "../components/Profile/SavedItemsSection/SavedItems"
import FitnessPlanSection from "../components/FitnessPlan/FitnessPlanSection"



export default function Profile({ dispatch, user, workoutList}) {
 

    
     
 
   
 

  return (
    <Container className="" fluid={true}>
      <Navbar user={user} />
      <ProfileInfo  user={user} />
      <FitnessPlanSection  user={user} dispatch={dispatch} workoutList={workoutList}/>
      



     
      <Footer />
    </Container>
  );
}

