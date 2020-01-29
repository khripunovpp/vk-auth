export default function() {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("vk-auth", "{}");
  };
}
