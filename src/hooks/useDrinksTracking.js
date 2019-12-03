import axios from 'axios';
import { SET_DRINK_COUNT } from "../reducers/appReducer";

export default function useDrinksTracking() {
  function handleCountSave(dispatch, userId, drinkType, operation, drinkCounts) {
    const drinkCountStr = drinkType + "Count"

    if (drinkCounts[drinkCountStr] === 0 && operation === 'decrease') {
      dispatch({
        type: SET_DRINK_COUNT,
        drinkType: drinkCountStr,
        operation
      })
    } else {
      axios
        .post(`/api/user-drinks?id=${userId}&action=${operation}&drinkType=${drinkType}`)
        .then((res) => {
          dispatch({
            type: SET_DRINK_COUNT, 
            drinkType: drinkCountStr,
            operation
          })
        })
        .catch(e => {
          console.log(e)
        });
    }
  }


  return { handleCountSave }
}