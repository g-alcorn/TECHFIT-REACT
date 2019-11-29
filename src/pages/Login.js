import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavBar from '../components/partials/Navbar'
import Footer from '../components/partials/Footer'
import Login from '../components/Login/Login'


const login = ({auth,dispatch}) => {
  return (
      < Container className="" fluid={true}>
          < TopNavBar />

      < Login dispatch={dispatch}  auth={auth}/>

          < Footer/>
         
      </Container>
  );
}

export default login;