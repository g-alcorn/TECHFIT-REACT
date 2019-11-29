import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import appReducer from "../reducers/appReducer";
import useProfileTokenUser from "../handlers/profile_token_user";

export default function Routes () {
  //GLOBAL REDUCER
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    mealList:[]
  });

  //SET JWT TOKEN
  useProfileTokenUser(dispatch);

  //dispatch({type:SET_RECIPES,recipes:[1,2,3]})


  //CHECK  JWT TOKEN
  const checkAuth = () => {
    if (localStorage.getItem("token")) {
      console.log(state.user);
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
  
  //RENDER ROUTES
  //Makes home, login, register pages inaccessible if logged in
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={() => 
          checkAuth() ?
            (<Redirect to={"/"}/>) : (<Home />)} 
        />

        <Route path="/login" component={() => 
          checkAuth() ?
          (<Redirect to={"/"}/>) : (<Login auth={auth} />)} 
        />

        <Route path="/register" component={() => 
          checkAuth() ? 
            (<Redirect to={"/"} />) : (<Register auth={auth} />)}
        />
  
        <Route
          path="/"
          render={() =>
            checkAuth() ? 
              (<Profile 
                auth={auth}  
                dispatch={dispatch} 
                mealList={state.mealList} 
                user={state.user} 
              />) : (<Redirect to={"/login"} />)}
        />
      </Switch>
    </BrowserRouter>
  );
};