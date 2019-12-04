import React from "react";
import { Container, Col, Row} from "react-bootstrap";

import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
import SavedItems from "../components/Profile/SavedItemsSection/SavedItems"

import Tracker from "../components/liquids/Tracker";
import Incrementer from "../components/liquids/Incrementer";
import LiquidPie from "../components/liquids/LiquidPie";
import useDrinksTracking from "../hooks/useDrinksTracking";


const ProfilePage = ({ user, dispatch, userWorkoutList, userMealList, drinkCounts }) => {
  if (user) {
    console.log('userid profile section copy', user.id)
  }

  const { handleCountSave } = useDrinksTracking();

  const handleCountChange = (event) => {
    event.preventDefault();
    const target = event.currentTarget.className;
    const drinkType = target.split("-")[0];
    const operation = target.split("-")[1];
    handleCountSave(dispatch, user.id, drinkType, operation, drinkCounts);
  }

  const countsExist = (drinkCounts) => {
    for (let count in drinkCounts) {
      if (drinkCounts[count] !== 0) {
        return true;
      }
    }
  }

  return (
    <Container className="profile--page" fluid={true}>
      <Navbar user={user} />
      <ProfileInfo  user={user} />

        <Row style={{ borderBottom: "1px solid black" }}>
        <Col lg={4} style={{ borderRight: "1px solid black", marginTop: "15px" }}>
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
            {countsExist(drinkCounts) && (
              <LiquidPie data={drinkCounts}/>
            )}
            {!countsExist(drinkCounts) && (
              <h6 className="no-drinks-counted" style={{ marginTop: "15px" }}>
                {"Use the drinks tracker to see your consumption!"}
              </h6>
            )}
          </Col>
      </Row>
        {
          user &&
          <SavedItems userId={user.id} dispatch={dispatch} user={user} userWorkoutList={userWorkoutList} userMealList={userMealList} />
        }

        <Footer />
      </Container>
    )
}

  

export default ProfilePage;



