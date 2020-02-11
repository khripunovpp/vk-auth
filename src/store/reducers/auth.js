const initialState = {
  login: false,
  token: {}
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state
      };
    case "SET_TOKEN":
      return {
        login: true,
        token: {
          ...action.payload
        }
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}
export default authReducer;
