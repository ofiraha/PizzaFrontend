import {PASSWORD_CHANGED} from "../helpers/constants";

const passwordChanged = (newPassword) => {
    return {
        password: newPassword,
        type: PASSWORD_CHANGED
    }
}

export default passwordChanged
