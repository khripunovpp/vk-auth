const initialState = {
  loading: false,
  login: false,
  token: {}
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loading: true
      };
    case "SET_TOKEN":
      return {
        loading: false,
        login: true,
        token: {
          ...action.payload
        }
      };
      case "NOT_LOGIN":
        return initialState;
    default:
      return state;
  }
}
export default authReducer;