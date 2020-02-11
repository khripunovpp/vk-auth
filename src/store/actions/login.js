import { API } from "../../api.js";

export default function() {
  return (dispatch) => {
    dispatch({ type: "LOG_IN" });
    API.auth();
  };
}
