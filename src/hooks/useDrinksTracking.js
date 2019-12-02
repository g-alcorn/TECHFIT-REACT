import React from 'react';
import axios from 'axios';
import { SET_DRINK_COUNT } from "../reducers/appReducer";

export default function useDrinksTracking() {
  function handleCountSave(dispatch, userId, drinkType, operation) {
    console.log('handleCountSave custom hook');
    axios
      .post(`/api/user-drinks?id=${userId}&action=${operation}&drinkType=${drinkType}`)
      .then((res) => {
        dispatch({
          type: SET_DRINK_COUNT, 
          drinkType: drinkType + "Count",
          operation
        })
      })
      .catch(e => {
        console.log(e)
      });
  }


  return { handleCountSave }
}