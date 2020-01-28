import { API } from '../../api.js';

export default function() {
    return async (dispatch, getState) => {
        dispatch({ type: "LOADING_USER_DATA" });
    }
}