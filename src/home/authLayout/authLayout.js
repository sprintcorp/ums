import Login from "../login/Login.vue";
import Register from "../register/Register.vue";
import FacebookLogin from './facebook/Facebook.vue'
import GoogleLogin from './google/Google.vue'
export default {
    data() {
        return {
            picked: "login"
        };
    },
    components: {
        login: Login,
        register: Register,
        FacebookLogin,
        GoogleLogin
    },
    methods: {
        switchPage(page) {
            this.picked = page;
        }
    }
};