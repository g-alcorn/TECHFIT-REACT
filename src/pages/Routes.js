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
    drinkCounts: {
      waterCount: 0,
      coffeeCount: 0,
      sodaCount: 0,
      otherCount: 0
    },
    userWorkoutList: [],
    userMealList: [],
    login: null,
    userLoading: true
  });


  useProfileTokenUser(dispatch, state.login, state.userLoading);
  useWorkoutList(dispatch, state.login, state.user);
  useMealsList(dispatch,state.login, state.user);

  useEffect(() => {
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
        dispatch({
          type: SET_USER,
          user: res.data
        });
      })
      .catch(e => {
        console.log("AXIOS ERROR: ", e);
      })
  }, [state.login])

  useEffect(() => {
    if (state.user !== null) {
      axios
        .get(`/api/user-drinks/?id=${state.user.id}`, axiosConfig)
        .then((results) => {
          const { water_count, coffee_count, soda_count, other_count } = results.data.rows[0];
          if (results.data.rowCount > 0) {
            dispatch({
              type: INIT_DRINK_COUNT,
              water_count, coffee_count, soda_count, other_count
            });
          }
        })
        .catch((e) => {
          console.log("AXIOS ERROR:", e)
        })
      } else {
        console.log('state.user is null')
      }
  }, [state.user])

  //axios workouts
  useEffect(() => {
    axios
    .get(`/api/workouts`)
    .then(response => {
      dispatch({ type: SET_WORKOUT_LIST, workoutList: response.data })
    })
    .catch(error => {
      console.log(error)
    })  
   }, [])


   //axious user_workokouts
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path="/home" 
          component={() => 
            state.user ? (<Redirect to={"/"}/>) : (<Home />)
          } />
        <Route 
          path="/login" 
          component={() => 
            state.user ? (<Redirect to={"/"}/>) : (<Login login={state.login}  dispatch={dispatch} />)
          } />
        <Route 
          path="/register" 
          component={() => 
            state.user ? (<Redirect to={"/"}/>) : (<Register />)} />

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
            user={state.user}
            drinkCounts={state.drinkCounts}
            userWorkoutList={state.userWorkoutList}
            userMealList={state.userMealList}
            mealList={state.mealList}
          />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
