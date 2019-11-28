import {useReducer} from 'react';
import axios from 'axios';
import reducer from '../reducers/updateDrinksReducer';

export default function updateDrinksTracking() {
  const [state, dispatch] = useReducer(reducer, {
    drinks: {
      waterCount: 0,
      coffeeCount: 0,
      sodaCount: 0,
      otherCount: 0
    }
  });
  
  function increase(drinkType) {
    //make new object for state with drinkTypeCount ++
    //Make axios call
    //Then update state w/ object via Dispatch

    const newState = {...state};
    axios
      .post(`/api/drinks-tracking?id=${userId}&action=increase&drinkType=${drinkType}`)
      .then((res) => {
        console.log('successfully posted drink update to server')
      })
      .catch((e) => {
        console.log(e);
      })
  }

  function decrease(drinkType) {

  }
}