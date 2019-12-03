import React, {useEffect, useState} from 'react'
import { Row, Col, Button, Accordion, Card } from "react-bootstrap";

import AccordianWorkout from './AccordianWorkout';
import AccordianRecipe from './AccordianRecipe'

import { Link } from "react-router-dom"
const SavedItems = ({dispatch, userWorkoutList, userMealList}) => {

 
  return (
    <Row>
        <Col lg={5} className="p-5">
    <h2 className="text-center p-3">Saved Recipes</h2>      
  
      
      <div>
      {userMealList.map((r, i) => (
            <AccordianRecipe
              key={i}
              id={r.id}
              photo_url={r.photo_url}
              recipe_title={r.recipe_title}
              recipe_description={r.recipe_description}
              prep_time={r.prep_time}
              source_url={r.source_url}
              servings={r.servings}
              dispatch={dispatch}
              
              
      />
      ))}
      </div>
      <Link to="/meal-plan">
      <Button variant="secondary" size="lg" block style={{marginTop: "10px"}}>
          Click Here To Add More Meals
        </Button>
        </Link>
    </Col>
    <Col lg={2}>
    </Col>
    <Col lg={5} className="p-5">
    <h2 className="text-center p-3">Saved Workouts</h2>      
  
      
      <div>
      {userWorkoutList.map((r, i) => (
            <AccordianWorkout
              key={i}
              id={r.id}
              image_url={r.image_url}
              name={r.name}
              workout_description={r.workout_description}
              difficulty={r.difficulty}
              video_url={r.video_url}
              dispatch={dispatch}
              
      />
      ))}
      </div>
      <Link to="/fitness-page">
      <Button variant="secondary" size="lg" block style={{marginTop: "10px"}} >
          Click To Add More Workouts
        </Button>
        </Link>
    </Col>
  </Row>
  )
}
export default SavedItems;