export default function() {
  return async (dispatch, getState) => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("vk-auth", "{}");
    return true;
  };
}
