import { API } from "../../api.js";

export default function() {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token["access_token"];
    dispatch({ type: "LOADING_USER_DATA" });
    return API.get({
      method: "friends.get",
      token: token
    })
      .then(response => {
        if (typeof response.error !== "undefined") {
          dispatch({ type: "ERROR_LOAD_FRIENDS_LIST" });
        } else {
          const friendsIDs = response.response.items.join(",");
          const friendsResponse = API.get({
            method: "users.get",
            params: {
              user_ids: friendsIDs,
              fields: "photo_50"
            },
            token: token
          });
          return friendsResponse;
        }
      })
      .then(({ response: friendsArray }) => {
        dispatch({ type: "SUCCESS_LOAD_FRIENDS_LIST", payload: friendsArray });
        return friendsArray;
      });
  };
}
