import {
    CHOOSE_LOCATION,
    CHOOSE_TYPE,
    LOGIN_USER,
    ORDER_PROGRESS_UPDATED,
    PASSWORD_CHANGED,
    USERNAME_CHANGED
} from "./helpers/constants";
import pizzaTypes from "./helpers/pizzaTypes";
import locations from "./helpers/locations";

const initialState = {
    username: '',
    password: '',
    isLoggedIn: false,
    token: '',
    pizzaType: pizzaTypes[0],
    location: locations[0],
    orderStatus: 0
};

function myReducer(state = initialState, action){

    switch (action.type) {
        case USERNAME_CHANGED:
            return Object.assign({}, state, {username: action.username});
        case PASSWORD_CHANGED:
            return Object.assign({}, state, {password: action.password});
        case LOGIN_USER:
            return Object.assign({}, state, {isLoggedIn: action.isLoggedIn}, {token: action.token});
        case ORDER_PROGRESS_UPDATED:
            return Object.assign({}, state, {orderStatus: action.orderStatus});
        case CHOOSE_TYPE:
            return Object.assign({}, state, {pizzaType: action.pizzaType});
        case CHOOSE_LOCATION:
            console.log('LOCATION: ' + action.location);
            return Object.assign({}, state, {location: action.location});


        default:
            return state
    }
}
export default myReducer;