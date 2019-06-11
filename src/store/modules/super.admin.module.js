import ApiService from "../../services/api.service";
import {
    FETCH_USERS
} from "../actions/actions.type";


const state = {
    errors: {},
    profile: {}
};

const getters = {
    profile(state) {
        return state.profile;
    }
};

const actions = {
    [FETCH_USERS](context, payload) {
        return ApiService.get("/users")
            .then(({data}) => {
                window.console.log(data);
                // context.commit(SET_PROFILE, data.profile);
                return data;
            })
            .catch(() => {
                // #todo SET_ERROR cannot work in multiple states
                // context.commit(SET_ERROR, response.data.errors)
            });
    },

};

export default {
    state,
    actions,
    getters
};
