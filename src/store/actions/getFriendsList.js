import { API } from "../../api.js";

export default function() {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "LOADING_USER_DATA" });
    API.get({
      method: "friends.get",
      token: state.auth.token["access_token"]
    }).then(r => {
      if (typeof r.error !== "undefined") {
        dispatch({ type: "ERROR_LOAD_FRIENDS_LIST" });
      } else {
        API.get({
          method: "users.get",
          params: {
            user_ids: r.response.items.join(","),
            fields: "photo_50"
          },
          token: state.auth.token["access_token"]
        }).then(r => {
          dispatch({ type: "SUCCESS_LOAD_FRIENDS_LIST", payload: r.response });
        });
      }
    });
  };
}
