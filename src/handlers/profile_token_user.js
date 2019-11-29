import { useEffect } from "react"
import axios from 'axios'
import { SET_USER } from '../reducers/appReducer';
const useProfileTokenUserData = (dispatch,login) => {
  useEffect(() => {
    console.log('getin the user')
      if(login)
       { const axiosConfig = {
            headers: {
              Authorization:`Bearer ${localStorage.getItem('token')}`,
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*"
            }
          };
          axios
            .get("/api/users/user-info", axiosConfig)
              .then(res => {
                  dispatch({
                      type: SET_USER,
                      user:res.data
                })
            })
            .catch(err => {
              // setMsg(err);
              console.log("AXIOS ERROR:", err);
            })
      }
        
    }, [login ]);
    
}


export default useProfileTokenUserData;
