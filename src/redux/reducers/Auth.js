import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../constants/authType";


// const u = localStorage.getItem("user");
// const user = u ? JSON.stringify(u) : null;
// const token = localStorage.getItem("token");
const initialState = {
    Email: null,
    isLoggedIn: false,
    Password: null,
}
// eslint-disable-next-line
export default function auth(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                Email: payload.data.Email,
                Password: payload.data.Password,
            };
        case LOGIN_FAIL:
            console.log("login fail");
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}