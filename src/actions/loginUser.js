import {LOGIN_USER} from "../helpers/constants";

const loginUser = (token) => {
    return {
        isLoggedIn: true,
        token: token,
        type: LOGIN_USER
    }
}

export default loginUser
