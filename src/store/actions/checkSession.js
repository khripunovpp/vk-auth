import { API } from '../../api.js';

export default function() {
    return async (dispatch, getState) => {
        dispatch({ type: "CHECK_SESSION" });
        const sessionData = await JSON.parse(localStorage.getItem('vk-auth'));

        console.log(sessionData)

        if(sessionData['expires_till'] > Date.now()) {
            dispatch({ type: "SET_TOKEN", payload: sessionData });
        }

        dispatch({ type: "NOT_LOGIN" });
    }
}