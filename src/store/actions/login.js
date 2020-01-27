import { API } from '../../api.js';

export default function() {
    return (dispatch, getState) => {
        dispatch({ type: "LOG_IN"});
        API.auth().then(resp => {
            dispatch({ type: "TOKEN_RESIVED", payload: resp});
        });
    }
}