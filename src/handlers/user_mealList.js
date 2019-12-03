import { useEffect } from "react"
import axios from 'axios'
import { SET_USERMEALS_LIST } from '../reducers/appReducer';
const useMealsList = (dispatch, login, user, userLoading) => {
  
  console.log("FFFFFFFF", user)
  
  useEffect(() => {
    if (login && !userLoading) {
      axios
      .get(`/api/user-meals/${user.id}`)
      .then(res => {

        dispatch({ type: SET_USERMEALS_LIST, userMealList: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  
     }
    }, [login]);
  
  }
  export default useMealsList;