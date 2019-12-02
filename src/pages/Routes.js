import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import MealPage from './MealPage';
import FitnessPage from './FitnessPage';
import Login from "./Login";
import Register from "./Register";
import appReducer, { SET_USER } from "../reducers/appReducer";
import useProfileTokenUser from "../handlers/profile_token_user";
import PrivateRoute from './PrivateRoute';
import axios from 'axios';
const Routes = (props) => {
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
    login: null,
    userLoading: true
  });

  useProfileTokenUser(dispatch, state.login, state.userLoading);

  useEffect(() => {
    console.log("getting user info")
    const axiosConfig = {
      headers: {
        Authorization:`Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .get("/api/users/user-info", axiosConfig)
      .then(res => {
        console.log(res.data)
        dispatch({
          type: SET_USER,
          user: res.data
        })
      })
      .catch(e => {
        console.log("AXIOS ERROR: ", e);
      })
  }, [state.login])

  // Render
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
          component={() => <MealPage dispatch={dispatch} login={state.login}  mealList={state.mealList} user={state.user} />}
        />

        <PrivateRoute
          path="/"
          component={() => <Profile userLoading={state.userLoading} dispatch={dispatch} mealList={state.mealList} user={state.user} drinkCounts={state.drinkCounts}/>}
        />

        <PrivateRoute
          path="/fitness-plan"
          component={() => <FitnessPage userLoading={state.userLoading} dispatch={dispatch} mealList={state.mealList} user={state.user} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
