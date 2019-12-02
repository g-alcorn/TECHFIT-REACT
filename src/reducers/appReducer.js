export const SET_USER = "SET_USER";
export const SET_RECIPES = "SET_RECIPES";
export const SET_MEAL_LIST = "SET_MEAL_LIST"
export const SET_LOGIN = 'SET_LOGIN'
export const SET_WORKOUT_LIST = "SET_WORKOUT_LIST"
export const SET_USER_LOADING = "SET_USER_LOADING"
export const SET_DRINK_COUNT = "SET_DRINK_COUNT"

const appReducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case SET_USER:
      const { user } = action;

      return {
        ...state,
        user,
        login:true
      };
    case SET_MEAL_LIST:
        return {
            ...state,
            mealList:[...state.mealList,...action.mealList]
        }
    case SET_LOGIN:
      return {
        ...state,
        login:action.login
      }
    
    case SET_WORKOUT_LIST:
      return {
        ...state,
        workoutList:[...state.workoutList,...action.workoutList]
    }

    case SET_USER_LOADING:
      if (state.userLoading) {
        return {
          ...state,
          userLoading: false
        }
      } else {
          return {
          ...state,
          userLoading: true
        }
      }
    /*  case SET_RECIPES: //this is the type
            return {
                ...state,
                recipes:action.recipes
            } */

    case SET_DRINK_COUNT:
      let newState;
      
      if (action.operation == 'increase') {
        newState = {
          ...state,
          drinkCounts: {
            ...state.drinkCounts,
            [action.drinkType]: state.drinkCounts[action.drinkType] + 1
          }
        }            
      } else if (action.operation == 'decrease' && state.drinkCounts[action.drinkType] > 0) {
        newState = {
          ...state,
          drinkCounts: {
            ...state.drinkCounts,
            [action.drinkType]: state.drinkCounts[action.drinkType] - 1
          }
        }     
      } else if (action.operation == 'decrease' && state.drinkCounts[action.drinkType] === 0) {
        newState = {
          ...state,
          drinkCounts: {
            ...state.drinkCounts,
            [action.drinkType]: 0
          }
        }     
      }
      return newState;

    default:
      return state;
  }
};

export default appReducer;
