import {CHOOSE_LOCATION} from "../helpers/constants";

const chooseLocation = (location = {}) => {
    return {
        location: location,
        type: CHOOSE_LOCATION
    }
}

export default chooseLocation
