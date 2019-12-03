import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

import Profile from "./Profile";
import FitnessPage from './FitnessPage'
import PageMealPlan from "./mealPlanPage";
import useWorkoutList from "../handlers/user_workoutList";
import useMealsList from "../handlers/user_mealList";

import Login from "./Login";
import Register from "./Register";
import appReducer, { SET_USER, SET_WORKOUT_LIST, SET_USERWORKOUT_LIST } from "../reducers/appReducer";
import useProfileTokenUser from "../handlers/profile_token_user";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
const Routes = props => {
  //state,dispatch
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    mealList: [],
    workoutList: [],
    userWorkoutList: [],
    userMealList: [],
    login: null,
    userLoading: true
  });

  //comment
  useProfileTokenUser(dispatch, state.login, state.userLoading);
  useWorkoutList(dispatch, state.login, state.user);
  useMealsList(dispatch,state.login, state.user);

  useEffect(() => {
    console.log("getting user info");
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .get("/api/users/user-info", axiosConfig)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: SET_USER,
          user: res.data
        });
      })
      .catch(e => {
        console.log("AXIOS ERROR: ", e);
      })
  }, [state.login])

  //axios workouts

  useEffect(() => {
    axios
    .get(`/api/workouts`)
    .then(response => {
      dispatch({ type: SET_WORKOUT_LIST, workoutList: response.data })
      
      // console.log(response.data)
      
    })
    .catch(error => {
      console.log(error)
    })
  
  
   }, [])

   //axious user_workokouts
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route
          path="/login"
          component={() => <Login login={state.login} dispatch={dispatch} />}
        />
        <Route path="/register" component={() => <Register />} />

        <PrivateRoute
          path="/meal-plan"
          component={() => (
            <PageMealPlan
              dispatch={dispatch}
              login={state.login}
              mealList={state.mealList}
              user={state.user}
            />
          )}
        />
       <PrivateRoute
          path="/fitness-page"
          component={() => <FitnessPage dispatch={dispatch} login={state.login}  workoutList={state.workoutList} user={state.user} userWorkoutList={state.userWorkoutList} />}
        />

        <PrivateRoute
          path="/"
          component={() => (
            <Profile
            userLoading={state.userLoading}
            dispatch={dispatch}
            mealList={state.mealList}
            user={state.user}
            userWorkoutList={state.userWorkoutList}
            userMealList={state.userMealList}
          />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
