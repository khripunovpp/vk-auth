import { API } from "../../api.js";

export default function() {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "LOADING_USER_DATA" });
    return API.get({
      method: "users.get",
      params: {
        fields: "photo_50"
      },
      token: state.auth.token["access_token"]
    }).then(r => {
      if (typeof r.error !== "undefined") {
        dispatch({ type: "ERROR_LOAD_USER_DATA" });
        return r.error;
      } else {
        const userData = r.response[0];
        dispatch({ type: "SUCCESS_LOAD_USER_DATA", payload: userData });
        return userData;
      }
    });
  };
}
