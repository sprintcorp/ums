import {CONSTANTS} from './constants';

export const getToken = () => {
    return window.localStorage.getItem(CONSTANTS.AUTH_KEY);
};

export const saveToken = token => {
    window.localStorage.setItem(CONSTANTS.AUTH_KEY, token);
};
export const saveUserData = (userData) => {
    window.localStorage.setItem(CONSTANTS.USER_DATA, userData);
};
export const getUserData = () => {
    return JSON.parse(window.localStorage.getItem(CONSTANTS.USER_DATA));
}
export const destroyToken = () => {
    window.localStorage.removeItem(CONSTANTS.AUTH_KEY);
};

export default {getToken, saveToken, destroyToken};
