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
  // const auth = () => {
  //   if (checkAuth()) {
  //     window.location.href = "/";
  //   }
  // };
  // Render
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={() => 
          checkAuth() ? 
          (<Redirect to={"/"}/>) : (<Home />)
        } />

        <Route path="/login" component={() => 
          checkAuth() ?
          (<Redirect to={"/"}/>) : (<Login />)
        } />

        <Route path="/register" component={() => 
          checkAuth() ?
          (<Redirect to={"/"}/>) : (<Register />)
        } />
  
        <Route
          path="/meal-plan"
          render={() =>
            checkAuth() ? (
              <MealPage
                dispatch={dispatch} 
                mealList={state.mealList} 
                user={state.user} 
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/fitness-page"
          render={() =>
            checkAuth() ?
            (<FitnessPage
              user={state.user}
              dispatch={dispatch}
              workoutList={state.workoutList}
            />) : (<Redirect to={"/login"} />)
          }
        />

        <Route
          path="/"
          render={() =>
            checkAuth() ? (
              <Profile 
                userLoading={state.userLoading}  
                dispatch={dispatch} 
                mealList={state.mealList} 
                user={state.user} 
              />
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
