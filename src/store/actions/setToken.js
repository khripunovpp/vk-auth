import { API } from '../../api.js';

export default function(tokenQuery) {
    return async (dispatch, getState) => {
        const tokenSetings = await tokenQuery.split('&').reduce(
            function(p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            }, {}
        );
        
        const expiresTill = Number(tokenSetings['expires_in']) + Number(Date.now());
        tokenSetings['expires_till'] = expiresTill;

        localStorage.setItem('vk-auth', JSON.stringify(tokenSetings));
        return true;
    }
}