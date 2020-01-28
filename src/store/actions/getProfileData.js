import { API } from '../../api.js';

export default function() {
    return async (dispatch, getState) => {
        const state = getState();
        dispatch({ type: "LOADING_USER_DATA" });
        API.get({
            method: 'users.get',
            params: {
                fields: "photo_50"
            },
            token: state.auth.token['access_token']
        }).then(r=>{
            typeof r.error !== 'undefined'
                ? dispatch({ type: "ERROR_LOAD_USER_DATA" })
                : dispatch({ type: "SUCCESS_LOAD_USER_DATA", payload: r.response[0] });
        })
    }
}