import React from 'react';
import { Row, Col, Button, Form } from "react-bootstrap";
import FitnessCard from '../FitnessPlan/FitnessCard'
const FitnessPlanSection = () => {
    const rowStyle = { minHeight: "300px", margin: "200px 0px" };

    return (
       

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
          <h1>Workout Search</h1>
        </header>

        <Form style={{ minWidth: "600px" }}>
          <Form.Group>
            <Form.Label>Type of workout*</Form.Label>
            <Form.Control type="text" placeholder="workout" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "100%",
              marginTop: "50px",
              filter: "grayscale(100%)"
            }}
            
          >
            Search
          </Button>
          <Form.Text className="text-muted"></Form.Text>
        </Form>
      </Col>
      <Col lg={6} className=" d-flex flex-column ">
        <h1>Workouts List Display</h1>
        <div>
          <FitnessCard />
        </div>
      </Col>
    </Row>
    );
}

export default FitnessPlanSection;
