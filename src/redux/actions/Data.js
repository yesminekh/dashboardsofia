import {
    SUCCESS,
    FAIL,
    SET_MESSAGE,
} from "../constants/DataType";
import DonneService from "../../service/Donnes.service";

export const GetAllData = () => (dispatch) => {
    return DonneService.getAllData().then(
        (data) => {
            dispatch({
                type: SUCCESS,
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
                error.toString();
            dispatch({
                type: FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
export const getOneData = () => (dispatch) => {
    return DonneService.getOneData().then(
        (data) => {
            dispatch({
                type: SUCCESS,
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
                error.toString();
            dispatch({
                type: FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};