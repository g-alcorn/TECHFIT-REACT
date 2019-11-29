export const SET_USER = "SET_USER";
export const SET_RECIPES = "SET_RECIPES";
export const SET_MEAL_LIST = "SET_MEAL_LIST"
export const SET_WORKOUT_LIST = "SET_WORKOUT_LIST"
const appReducer = (state, action) => {
    console.log(action)
  switch (action.type) {
    case SET_USER:
      const { user } = action;

      return {
        ...state,
        user
      };
      case SET_MEAL_LIST:
          return {
              ...state,
              mealList:[...state.mealList,...action.mealList]
          }
      case SET_WORKOUT_LIST:
          return {
            ... state,
            workoutList:[...state.workoutList,...action.workoutList]
          }
 
    default:
      return state;
  }
};

export default appReducer;
