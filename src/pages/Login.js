import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavBar from '../components/partials/Navbar'
import Footer from '../components/partials/Footer'
import Login from '../components/Login/Login'


const login = (props) => {
  return (
      < Container className="" fluid={true}>
          < TopNavBar />

      < Login  auth={props.auth}/>

          < Footer/>
         
      </Container>
  );
}

export default login;