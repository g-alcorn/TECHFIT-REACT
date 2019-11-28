import React from "react";
import { Container } from 'react-bootstrap'
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import RegistrationForm from "../components/Register/RegistrationForm";
const signup = () => {
  return (
     <Container className="" fluid={true}>
      <Navbar />
      <RegistrationForm />
      <Footer />
    </Container>
  );
};

export default signup;
