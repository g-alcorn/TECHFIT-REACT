import React, { Fragment } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
const AboutUs = () => {
    const rowStyle = { minHeight: "60vh" };
    const footerButton = { display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', padding: '40px' }

    return (
        <Fragment>
        <Row>
      
            <Col className='text-center' lg={12} >
              <h1 className='lead' style={{fontSize:'60px'}}>About Us</h1>
            <p style={{fontSize:'30px'}}>We provide a wide range of services to meet even the most daring requirements.</p>
            </Col>
          </Row>
      <Row style={rowStyle} className=" p-4">
        
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
          lg={6}
          className=""
        >
          
          <header>
            <p style={{fontSize:'20px'}}>Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding. We are devoted to creating unique and innovative solutions along with the high-quality supporting services.</p>
          </header>
         
          <footer style={footerButton}>
            <Button style={{minWidth:'180px'}} size='lg' variant="outline-dark">Leearn More</Button>
            
          </footer>
        </Col>
        <Col lg={6} className=" d-flex flex-column justify-content-center align-items-center">
          <img className='img-fluid' style={{width:'700px'}} src='https://res2.weblium.site/res/5caf62ab525d1a0023399212/5d5bb7801ff8a40023d9799f_optimized_1396' alt="application" />
        </Col>
      </Row>
       </Fragment>
    );
}

export default AboutUs;
