import ApiService from "../../services/api.service";
import {saveUserData, getToken} from "../../utils/cache";
import {
    LOGIN,
    LOGOUT,
    REGISTER,
    CHECK_AUTH,
    UPDATE_USER,
    RESET_PASSWORD,
    EDIT_PASSWORD
} from "../actions/actions.type";

import {getUserData} from '../../utils/cache';

import {SET_AUTH, PURGE_AUTH, SET_ERROR} from "../types/mutations.type";

const state = {
    errors: null,
    user: {},
    isAuthenticated: !!getToken()
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {
    [LOGIN](context, credentials) {
        ApiService.init();
        return new Promise((resolve, reject) => {
            ApiService.post("/signin", credentials)
                .then(({data}) => {
                    // context.commit(SET_AUTH, data.data);
                    saveUserData(JSON.stringify(data.data));
                    resolve(data);
                })
                .catch(({response}) => {
                    if(response !== undefined)
                        context.commit(SET_ERROR, response.data.error);
                    //reject(response.data);
                    reject(response);
                });
        });
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH);
    },
    [REGISTER](context, credentials) {
        ApiService.init();
        return new Promise((resolve, reject) => {
            ApiService.post("/signup", credentials)
                .then(({data}) => {
                    // window.console.log(data);
                    // context.commit(SET_AUTH, data.user);
                    resolve(data);
                })
                .catch(({response}) => {
                    context.commit(SET_ERROR, response.data.error);
                    reject(response.data);
                });
        });
    },
    [CHECK_AUTH](context) {
        if (Cache.get()) {
            ApiService.init();
            ApiService.get("user/" + Cache.get())
                .then(({data}) => {
                    context.commit(SET_AUTH, data.user);
                })
                .catch(({response}) => {
                    context.commit(SET_ERROR, response.data.error);
                });
        } else {
            context.commit(PURGE_AUTH);
        }
    },
    [UPDATE_USER](context, payload) {
        const {email, username, firstName, lastName} = payload;
        const user = {
            email,
            username,
            firstName,
            lastName
        };
        ApiService.init();
        return ApiService.put("user/" + Cache.get(), user).then(({data}) => {
            context.commit(SET_AUTH, data.user);
            return data;
        });
    },

    [EDIT_PASSWORD](context, id, payload){
        ApiService.init();
        return new Promise((resolve, reject) => {
            ApiService.post("/user/password/" + id, payload)
                .then(({data}) => {
                    resolve(data);
                })
                .catch(({response}) => {
                    //reject(response.data);
                    reject(response);
                });
        });
    },

    // @dev1 -> Ore Richard
    [RESET_PASSWORD](context, credentials) {
        ApiService.init();
        return new Promise((resolve, reject) => {
            ApiService.post("/password/reset", credentials)
                .then(({data}) => {
                    resolve(data);
                })
                .catch(({response}) => {
                    //reject(response.data);
                    reject(response);
                });
        });
    },
}
const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        state.errors = {};
        ApiService.saveToken(state.user.token);
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        ApiService.destroyToken();
    }
};


export default {
    state,
    actions,
    mutations,
    getters
};
