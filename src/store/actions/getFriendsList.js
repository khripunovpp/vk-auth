import { API } from '../../api.js';

export default function() {
    return async (dispatch, getState) => {
        const state = getState();
        dispatch({ type: "LOADING_USER_DATA" });
        API.get({
            method: 'friends.get',
            token: state.auth.token['access_token']
        }).then(r=>{
            typeof r.error !== 'undefined'
                ? dispatch({ type: "ERROR_LOAD_FRIENDS_LIST" })
                : dispatch({ type: "SUCCESS_LOAD_FRIENDS_LIST", payload: r.response.items });
        })
    }
}