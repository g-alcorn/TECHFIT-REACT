export const SET_USER = "SET_USER";
export const SET_RECIPES = "SET_RECIPES";
export const SET_MEAL_LIST = "SET_MEAL_LIST"
export const SET_LOGIN = 'SET_LOGIN'
export const SET_WORKOUT_LIST = "SET_WORKOUT_LIST"
export const SET_USER_LOADING = "SET_USER_LOADING"
export const SET_USERWORKOUT_LIST = "SET_USERWORKOUT_LIST"
export const SET_USERMEALS_LIST = "SET_USERMEALS_LIST"
export const SET_DELETE_USERMEALS_LIST = "SET_DELETE_USERMEALS_LIST"
export const SET_DELETE_WORKOUTS_LIST = "SET_DELETE_WORKOUTS_LIST"
export const SET_TEST = 'SET_TEST';
const appReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return {
        ...state,
        user,
        login: true
      };
    case SET_MEAL_LIST:
      return {
        ...state,
        //add new meal query to the top
        mealList: [...action.mealList ]
        //adds new meal query to the bottom
        // mealList: [...state.mealList, ...action.mealList]
      };
    case SET_LOGIN:
      return {
        ...state,
        login:action.login
      }
    
      case SET_WORKOUT_LIST:
        return {
          ... state,
          workoutList:[...state.workoutList,...action.workoutList]
        }
      
      case SET_USERWORKOUT_LIST:
          
          return   {
            ... state,
            userWorkoutList:[...state.userWorkoutList, ...action.userWorkoutList]
            
          }
          
      
      case SET_USERMEALS_LIST:
          return {
            ...state,
            userMealList:[...state.userMealList,...action.userMealList]
        };
      
        case SET_DELETE_USERMEALS_LIST:
        
          return {
            ...state,
            userMealList: state.userMealList.filter(userMealList => userMealList.id !== action.id)
        }

        case SET_DELETE_WORKOUTS_LIST:
        
            return {
              ...state,
              userWorkoutList: state.userWorkoutList.filter(userWorkoutList => userWorkoutList.id !== action.id)
          }

    case SET_WORKOUT_LIST:
      return {
        ...state,
        workoutList: [...state.workoutList, ...action.workoutList]
      };
    case SET_USER_LOADING:
      if (state.userLoading) {
        return {
          ...state,
          userLoading: false
        };
      } else {
        return {
          ...state,
          userLoading: true
        };
      }
    /*  case SET_RECIPES: //this is the type
            return {
                ...state,
                recipes:action.recipes
            } */
    case SET_TEST:
      console.log("SET_TEST in REDUCER");
      return state;
    default:
      return state;
  }
  
};
export default appReducer;
