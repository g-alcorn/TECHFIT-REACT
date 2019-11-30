import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
 import Profile from "./Profile";
import MealPlan from './MealPlan'
import Login from "./Login";
import Register from "./Register";
import FitnessPage from "./FitnessPage";
import MealPage from "./MealPage";
import SavedFitnessPage from "./SavedFitnessPage";
import SavedMealPage from "./SavedMealPage";
import appReducer from "../reducers/appReducer";
import useProfileTokenUser from "../handlers/profile_token_user";


const Routes = () => {
  //state,dispatch
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    mealList: [],
    login:null
  });
  useProfileTokenUser(dispatch,state.login);
  //dispatch({type:SET_RECIPES,recipes:[1,2,3]})
  // Functions
  const checkAuth = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  const auth = () => {
    if (checkAuth()) {
      window.location.href = "/";
    }
  };
  // Render
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route path="/login" component={() => <Login login={state.login}  dispatch={dispatch} auth={auth} />} />
        <Route path="/register" component={() => <Register auth={auth} />} />
  
        <Route
          path="/meal-plan"
          render={() =>
            checkAuth() ? (
              <MealPlan auth={auth}  dispatch={dispatch} mealList={state.mealList} user={state.user} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/"
          render={() =>
            checkAuth() ? (
              <Profile auth={auth} userLoading={state.userLoading}  dispatch={dispatch} mealList={state.mealList} user={state.user} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route 
          path="/saved-meal-page"
          render={
            checkAuth() ?
              (<SavedMealPage 
                user={state.user}
                dispatch={dispatch}
                mealList={state.mealList}
            />) : (<Redirect to={"/login"}/>)
          }
        />

        <Route
          path="/saved-fitness-page"
          render={
            checkAuth() ?
              (<SavedFitnessPage 
                user={state.user}
                dispatch={dispatch}
                workoutList={state.workoutList}
              />) : (<Redirect to={"/login"}/>)
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
