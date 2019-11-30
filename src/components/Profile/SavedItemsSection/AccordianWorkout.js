import React, { useState} from 'react'
import { Row, Col, Button, Accordion, Card, Modal } from "react-bootstrap";
import WorkoutCardInfo from './WorkoutCardInfo'

const AccordianWorkout = props => {
  
    const workout = {
      id: props.id,
      name: props.name,
      difficulty: props.difficulty,
      workout_description: props.workout_description,
      image_url: props.image_url,
      video_url: props.video_url
    };




  return (

    <Accordion >
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }}>
              {props.name}
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              <WorkoutCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </Accordion>
  )
}

export default AccordianWorkout;
