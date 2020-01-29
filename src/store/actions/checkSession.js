export default function() {
  return async (dispatch, getState) => {
    dispatch({ type: "CHECK_SESSION" });
    const sessionData =
      (await JSON.parse(localStorage.getItem("vk-auth"))) || {};

    if (sessionData["expires_till"] > Date.now()) {
      dispatch({ type: "SET_TOKEN", payload: sessionData });
      return true;
    } else {
      dispatch({ type: "LOGOUT" });
      localStorage.setItem("vk-auth", "{}");
      return false;
    }
  };
}
