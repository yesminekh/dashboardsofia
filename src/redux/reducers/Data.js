import {
    SUCCESS,
    FAIL,
} from "../constants/DataType";


// const u = localStorage.getItem("user");
// const user = u ? JSON.stringify(u) : null;
// const token = localStorage.getItem("token");
const initialState = {
    Data: null,
    isLoggedIn: false,
    token: null,
}
// eslint-disable-next-line
export default function auth(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: payload.data.token,
                Data: payload.data.Data,
            };
        case FAIL:
            return {
                ...state,
                isLoggedIn: false,
                Data: null,
            };
        
        default:
            return state;
    }
}