import { useEffect } from "react"
import axios from 'axios'
import { SET_USERMEALS_LIST } from '../reducers/appReducer';
const useMealsList = (dispatch, login, user, userLoading) => {
  
  
  
  useEffect(() => {
    console.log("loading meallist")
    // if (login && !userLoading) {
      if (user) {
      console.log("getting meallist")
      axios
      .get(`/api/user-meals/${user.id}`)
      .then(res => {

        dispatch({ type: SET_USERMEALS_LIST, userMealList: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  
     }
    }, [user]);
  
  }
  export default useMealsList;