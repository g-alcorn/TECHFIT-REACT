import React, { useState} from 'react'
import { Row, Col, Button, Accordion, Card, Modal } from "react-bootstrap";
import WorkoutCardInfo from './WorkoutCardInfo'
import RecipeCardInfo from './RecipeCardInfo';

const AccordianRecipe = props => {
  
  const meal = {
    photo_url: props.image,
    recipe_title: props.title,
    recipe_description: props.instructions,
    prep_time: props.minutes,
    servings: props.servings,
    source_url:props.url
  };




  return (

    <Accordion >
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }}>
              {props.title}
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </Accordion>
  )
}

export default AccordianRecipe;
