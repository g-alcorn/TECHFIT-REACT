import React, { Fragment } from 'react'
import { Row, Col} from "react-bootstrap";

const whyChooseStyle = { minHeight: "30vh" }
const imageStyle = { height: "180px", width: "180px", marginBottom: "40px"}

const WhyChooseUs = () => {
  return (
    <Fragment>
    <Row className="bg-light p-4">
      <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Why Choose Us?</h1>
      </Col>
    </Row>
    
    <Row style={{ whyChooseStyle, }} className="bg-light p-4 text-center">
      <Col lg={4}>
        <img style={imageStyle} src="images/idea.svg" alt="Think Smart"></img>
        <h4>Meal & Fitness Profile</h4>
        <p>We have extensive experience and can be proud of 10 000+ completed projects.</p>
      </Col>
      <Col lg={4}>
        <img style={imageStyle} src="images/analysis.svg" alt="Progress Report"></img>
        <h4>Progress Reports</h4>
        <p>We value each client and always respond to feedback throughout our cooperation.</p>
      </Col>
      <Col lg={4}>
        <img style={imageStyle} src="images/startup.svg" alt="Rocket"></img>
        <h4>Tech Space Friendly</h4>
        <p>We create our products using the latest technologies to ensure the best experience.</p>
      </Col>
    </Row>
    </Fragment>
  )
}

export default WhyChooseUs;
