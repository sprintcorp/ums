// import { mapState } from "vuex";
//import {LOGIN} from "../../store/actions/actions.type";
import {LOGIN} from '../../store/actions/actions.type';
import {EMAIL_REGEX} from '../../utils/constants'

export default {
    name: "login",
    data() {
        return {
            loading: false,
            error: null,
            username: null,
            password: null,
            usernameError: false,
            passwordError: false
        };
    },
    methods: {
        switchToRegister() {
            this.$emit("switchPage", "register");
        },
        onSubmit(username, password) {
            if(this.loading) return; // Prevent overlapping requests.
            this.usernameError = false;
            this.passwordError = false;
            this.error = null;

            if(this.username === null || this.username.trim().length === 0){
                this.usernameError = true;
                return;
            } else if(this.password === null){
                this.passwordError = true;
                return;
            }

            this.loading = true;
            this.$store
                .dispatch(LOGIN, {username, password})
                .then(() => this.$router.push({name: "userDashboard"}))
                .catch(error => {
                    this.loading = false;
                    this.error = error === undefined ? 'No internet access.' : error.data.error;
                });
        }
    },/*
    computed: {
        // ...mapState({
        //   errors: state => state.auth.errors
        // })
    // }*/
};
