import { API } from "../../api.js";

export default function() {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token["access_token"];
    dispatch({ type: "LOADING_USER_DATA" });
    return API.get({
      method: "users.get",
      params: {
        fields: "photo_50"
      },
      token: token
    })
      .then(response => {
        if (typeof response.error !== "undefined") {
          throw new Error(response.error["error_msg"]);
        } else {
          const userData = response.response[0];
          dispatch({ type: "SUCCESS_LOAD_USER_DATA", payload: userData });
          return userData;
        }
      })
      .catch(({ message }) => {
        if (message.includes("invalid access_token")) {
          dispatch({ type: "LOGOUT" });
          localStorage.setItem("vk-auth", "{}");
          return "Invalid access_token";
        } else {
          dispatch({ type: "ERROR_LOAD_USER_DATA", payload: message });
          return message;
        }
      });
  };
}
