import { API } from '../../api.js';

export default function() {
    return (dispatch, getState) => {
        dispatch({ type: "LOG_IN" });
        API.auth();
    }
}