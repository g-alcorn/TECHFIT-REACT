import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavBar from '../components/partials/Navbar'
import Footer from '../components/partials/Footer'
import LoginForm from '../components/Login/LoginForm'


const login = ({auth,dispatch,login}) => {
  return (
      < Container className="" fluid={true}>
          < TopNavBar />

      < LoginForm login={login} dispatch={dispatch}  auth={auth}/>

          < Footer/>
         
      </Container>
  );
}

export default login;