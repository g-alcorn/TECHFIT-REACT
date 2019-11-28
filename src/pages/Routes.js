import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import appReducer from "../reducers/appReducer";
import useProfileTokenUser from "../handlers/profile_token_user";


const Routes = () => {
  //state,dispatch
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    mealList:[]
  });
  useProfileTokenUser(dispatch);
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
        <Route path="/login" component={() => <Login auth={auth} />} />
        <Route path="/register" component={() => <Register auth={auth} />} />
  
        <Route
          path="/"
          render={() =>
            checkAuth() ? (
              <Profile auth={auth}  dispatch={dispatch} mealList={state.mealList} user={state.user} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
