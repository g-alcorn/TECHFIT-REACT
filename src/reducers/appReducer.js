export const SET_USER = "SET_USER";
export const SET_RECIPES = "SET_RECIPES";
export const SET_MEAL_LIST = "SET_MEAL_LIST"
export const SET_LOGIN = 'SET_LOGIN'
const appReducer = (state, action) => {
    console.log(action)
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
              mealList:[...action.mealList]
          }
    case SET_LOGIN:
      return {
        ...state,
        login:action.login
      }
    /*  case SET_RECIPES: //this is the type
            return {
                ...state,
                recipes:action.recipes
            } */
    default:
      return state;
  }
};

export default appReducer;
