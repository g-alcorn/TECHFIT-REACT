import { useEffect } from "react"
import axios from 'axios'
import { SET_USERWORKOUT_LIST } from '../reducers/appReducer';
const useWorkoutList = (dispatch, login, user, userLoading) => {
  
  
  useEffect(() => {
    if (login && !userLoading) {
      console.log("HHHHHHH", login)
      axios
        .get(`/api/user-workouts/${user.id}`)
        .then(response => {
 
        
          // setWorkouts(response.data)

          dispatch({ type: SET_USERWORKOUT_LIST, userWorkoutList: response.data })
        })
        .catch(error => {
          console.log(error)
        });
  
     }
    }, [login]);
  
  
  }
  export default useWorkoutList;