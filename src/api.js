import { 
    VK_APP_ID,
    VK_REDIRECT_URL
} from "./VKconfig.js";
import axios from "axios-jsonp-pro";

export let API = {
    auth() {
        window.location = `//oauth.vk.com/authorize?client_id=${VK_APP_ID}&response_type=token&redirect_uri=${VK_REDIRECT_URL}&scope=2&display=mobile&revoke=1`
    },
    async get({method, params = {}, token}) {
        const parameters = Object.keys(params).map(function(key) {
            return key + '=' + params[key]
        }).join('&');
        let response = await axios.jsonp(`//api.vk.com/method/${method}?${parameters}&access_token=${token}&v=5.103`);
        return response;
    }
}