import { 
    VK_APP_ID,
    VK_REDIRECT_URL
} from "./VKconfig.js"

export let API = {
    auth() {
        window.location = `https://oauth.vk.com/authorize?client_id=${VK_APP_ID}&response_type=token&redirect_uri=${VK_REDIRECT_URL}&scope=12&display=mobile`
    }
}