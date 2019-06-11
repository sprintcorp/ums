import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from "./router";
import Vuebar from 'vuebar';
import store from "./store";
import InputTag from 'vue-input-tag';
import {
    ClientTable} from 'vue-tables-2';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "./assets/css/styles.css";

Vue.use(BootstrapVue);
/*
    Makes a new VueRouter that we will use to run all of the routes
    for the app. routes is imported from routes.js
    routing mode changed from hash to history
*/
Vue.use(Vuebar);
/*
Configuration that indicate vue application is still in developmemt mode
 */
Vue.config.productionTip = false;
/*
 Initiating vue instance rendered in the App.vue and mounted on the element 'id'
 is #app which routes components with router-view
 */
Vue.component('input-tag', InputTag);
Vue.use(ClientTable);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');