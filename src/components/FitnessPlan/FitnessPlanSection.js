import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Row, Col, Button, Form } from "react-bootstrap";
import FitnessCard from '../FitnessPlan/FitnessCard'
import { SET_WORKOUT_LIST } from "../../reducers/appReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const FitnessPlanSection = ({user, dispatch, workoutList}) => {
  const rowStyle = { minHeight: "300px", margin: "200px 0px" };

  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const addSelectedWorkout = workout => {
    setSelectedWorkouts([...selectedWorkouts, workout]);
    console.log("Selected Workout", selectedWorkouts)
  }

 useEffect(() => {
  axios
  .get(`/api/workouts`)
  .then(response => {
    dispatch({ type: SET_WORKOUT_LIST, workoutList: response.data })
    console.log('dispatch', dispatch)
  })
  .catch(error => {
    console.log(error)
  })


 }, [])





  return (


    <Row style={rowStyle} className=" p-4">
      <Col lg={12} className=" d-flex flex-column "         style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
      }}>

        <h1>Workouts List Display</h1>
        <div>
          {console.log('workoutlis', workoutList)}
          {workoutList.map((r, i) => (
            <FitnessCard
              addSelectedWorkout={addSelectedWorkout}
              key={i}
              image_url={r.image_url}
              name={r.name}
              workout_description={r.workout_description}
              difficulty={r.difficulty}
              video_url={r.video_url}


            />


          ))}
        </div>

      </Col>
    </Row>
  );
}

export default FitnessPlanSection;
