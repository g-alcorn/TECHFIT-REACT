import { useEffect } from "react"
import axios from 'axios'
import { SET_USERWORKOUT_LIST } from '../reducers/appReducer';
const useWorkoutList = (dispatch, login, user) => {
  useEffect(() => {
    if (login) {
      axios
        .get(`/api/user-workouts/${user.id}`)
        .then(response => {
          console.log(('-').repeat(30));
        
          // setWorkouts(response.data)
          console.log("user-workout", response.data)
          dispatch({ type: SET_USERWORKOUT_LIST, userWorkoutList: response.data })
        })
        .catch(error => {
          console.log(error)
        });
  
     }
    }, [login]);
  
  
  }
  export default useWorkoutList;