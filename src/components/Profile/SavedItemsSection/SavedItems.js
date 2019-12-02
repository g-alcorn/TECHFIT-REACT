import React, {useEffect, useState} from 'react'
import { Row, Col, Button, Accordion, Card } from "react-bootstrap";
import RecipeCardInfo from './RecipeCardInfo'
import WorkoutCardInfo from './WorkoutCardInfo'
import { SET_USERWORKOUT_LIST, SET_USERMEALS_LIST } from "../../../reducers/appReducer";
import AccordianWorkout from './AccordianWorkout';
import AccordianRecipe from './AccordianRecipe'
import axios from "axios"
import { Link } from "react-router-dom"

const SavedItems = (user, dispatch, userWorkoutList, userId) => {
  if (user) {
    console.log('userid from saveditems',user.userId)
  }
  
  const [workouts, setWorkouts] = useState([])
  const [meals, setMeals] = useState([])

  useEffect(() => {
    axios
    .get(`/api/user-workouts/${user.userId}`)
    .then(response => {
      setWorkouts(response.data)
      console.log("user-workout", response.data)
      dispatch({ type: SET_USERWORKOUT_LIST, userWorkoutList: response.data })

      
      
    })
    .catch(error => {
      console.log(error)
    })

   }, [])
   
   console.log("aaaa",userWorkoutList)

   useEffect(() => {
    axios
    .get(`/api/user-meals/${user.userId}`)
    .then(res => {
      setMeals(res.data)
      console.log("user-meal", res.data)
      dispatch({ type: SET_USERMEALS_LIST, userMealsList: res.data })

      
      
    })
    .catch(error => {
      console.log(error)
    })

   }, [])








  return (
    <Row>
        <Col lg={5} className="p-5">
    <h2 className="text-center p-3">Saved Recipes</h2>      
  
      
      <div>
      {meals.map((r, i) => (
            <AccordianRecipe
              key={i}
              id={r.id}
              photo_url={r.photo_url}
              recipe_title={r.recipe_title}
              recipe_description={r.recipe_description}
              prep_time={r.prep_time}
              source_url={r.source_url}
              servings={r.servings}
              
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
      {workouts.map((r, i) => (
            <AccordianWorkout
              key={i}
              id={r.id}
              image_url={r.image_url}
              name={r.name}
              workout_description={r.workout_description}
              difficulty={r.difficulty}
              video_url={r.video_url}
              
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