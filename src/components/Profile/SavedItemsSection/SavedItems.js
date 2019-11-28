import React from 'react'
import { Row, Col, Button, Accordion, Card } from "react-bootstrap";
import RecipeCardInfo from './RecipeCardInfo'
import WorkoutCardInfo from './WorkoutCardInfo'

const SavedItems = () => {
  return (
    <Row>
    <Col lg={5} className="p-5">
      <h2 className="text-center p-3">Saved Recipes</h2>
      <Accordion >
        <Card style={{ backgroundColor: "white! important" }}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }} >
              Delicious Pear Roasted Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ color: "black" }}>
              Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{ color: "black" }}>
              Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{ color: "black" }}>
              Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{ color: "black" }}>
              Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
        <Button variant="secondary" size="lg" block style={{marginTop: "10px"}}>
          Click Here To See More
        </Button>


    </Col>

    <Col lg={2}>
    </Col>
    <Col lg={5} className="p-5">
    <h2 className="text-center p-3">Saved Workouts</h2>
      <Accordion >
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }}>
              Stair Climbing
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              <WorkoutCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ color: "black" }}>
              Stair Climbing
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1" style={{ color: "black" }}>
            <Card.Body>

            <WorkoutCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{ color: "black" }}>
              Stair Climbing
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>

            <WorkoutCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{ color: "black" }}>
              Stair Climbing
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>

            <WorkoutCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{ color: "black" }}>
              Stair Climbing
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>

            <WorkoutCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Button variant="secondary" size="lg" block style={{marginTop: "10px"}}>
          Click Here To See More
        </Button>
    </Col>
  </Row>
  )
}

export default SavedItems;