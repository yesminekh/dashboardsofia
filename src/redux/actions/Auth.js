import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "../constants/authType";
import AuthService from "../../service/Auth.service";

export const login = (Email, password) => (dispatch) => {
    console.log("aaaaaaaaaaaaaaaaaa",Email);
    return AuthService.login(Email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { data: data },
            }).then(response=>console.log(response.data))
            return Promise.resolve();
        },
        (error) => {
                        const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
            dispatch({
                type: LOGIN_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};