import React from "react";
import NavBar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Container } from "react-bootstrap";
import FitnessPlanSection from "../components/FitnessPlan/FitnessPlanSection";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
const FitnessPlan = () => {
  return (
    <Container className="" fluid={true}>
      <NavBar />
      <ProfileInfo />
      <FitnessPlanSection />
      <Footer />
    </Container>
  );
};

export default FitnessPlan;
