import {USERNAME_CHANGED} from "../helpers/constants";

const usernameChanged = (newUserName) => {
    return {
        username: newUserName,
        type: USERNAME_CHANGED
    }
}

export default usernameChanged