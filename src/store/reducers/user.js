const initialState = {
  friends: [],
  profile: {}
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_LOAD_FRIENDS_LIST":
      return {
        ...state,
        friends: [...action.payload]
      };
    case "ERROR_LOAD_FRIENDS_LIST":
      return {
        ...state,
        friends: []
      };
    case "ERROR_LOAD_USER_DATA":
      return state;
    case "SUCCESS_LOAD_USER_DATA":
      return {
        ...state,
        profile: {
          ...action.payload
        }
      };
    default:
      return state;
  }
}
export default authReducer;
