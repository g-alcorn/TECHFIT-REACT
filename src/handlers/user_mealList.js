import { useEffect } from "react"
import axios from 'axios'
import { SET_USERMEALS_LIST } from '../reducers/appReducer';
const useMealsList = (dispatch, login, user) => {
  useEffect(() => {
    if (login) {
      axios
      .get(`/api/user-meals/${user.id}`)
      .then(res => {
        console.log(('-').repeat(30));
        dispatch({ type: SET_USERMEALS_LIST, userMealList: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  
     }
    }, [login]);
  
  }
  export default useMealsList;