import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {
    API_URL,
    API_KEY
} from "../config";
import { getToken } from '../utils/cache';


const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
        this.setApiHeader();
    },

    setApiHeader() {
        Vue.axios.defaults.headers[
            "X-App-Key"
            ] = `${API_KEY}`;
    },
    setOauthHeader() {
        Vue.axios.defaults.headers[
            "Authorization"
            ] = `${ getToken()}`;
    },


    query(res, params) {
        return Vue.axios.get(res, params).catch(error => {
            throw new Error(`UMS ApiService ${error}`);
        });
    },

    get(res, slug = "") {
        return Vue.axios.get(`${res}/${slug}`).catch(error => {
            throw new Error(`UMS ApiService ${error}`);
        });
    },

    post(res, params) {
        return Vue.axios.post(`${res}`, params);
    },

    update(res, slug, params) {
        return Vue.axios.put(`${res}/${slug}`, params);
    },

    put(res, params) {
        return Vue.axios.put(`${res}`, params);
    },

    delete(res) {
        return Vue.axios.delete(res).catch(error => {
            throw new Error(`UMS ApiService ${error}`);
        });
    }
};

export default ApiService;