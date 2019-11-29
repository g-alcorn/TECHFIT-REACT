export const SET_USER = "SET_USER";
export const SET_RECIPES = "SET_RECIPES";
export const SET_MEAL_LIST = "SET_MEAL_LIST"
const appReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case SET_USER:
    const user = action.value;
    console.log('reducer called')
      return {
        ...state,
        user
      };
    case SET_MEAL_LIST:
      return {
        ...state,
        mealList:[...state.mealList,...action.mealList]
      }
    /*case SET_RECIPES: //this is the type
      return {
          ...state,
          recipes:action.recipes
      } */
    default:
      return state;
  }
};

export default appReducer;
