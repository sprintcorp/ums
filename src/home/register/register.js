import {mapState} from "vuex";
import {REGISTER} from "../../store/actions/actions.type";
import {CONSTANTS} from "../../utils/constants";

export default {
  name: "register",
  data() {
    return {
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      password: null,
      roles: null,
      loading: false,
      error: null,
      usernameError: false,
      emailError: false,
      passwordError: false,
      usernameSuccess: false,
      emailSuccess: false,
      passwordSuccess: false,
    };
  },
  methods: {
    switchToLogin() {
      this.$emit("switchPage", "login");
    },
    onSubmit(first_name, last_name, username, email, password) {
      if(this.loading) return; // Prevent overlapping requests.
      this.usernameError = false;
      this.emailError = false;
      this.passwordError = false;
      this.error = null;

      if(this.username === null || this.username.trim().length === 0){
        this.usernameError = true;
        this.usernameSuccess = false;
        return;
      } else if(this.email === null || !this.email.trim().match(CONSTANTS.EMAIL_REGEX)){
        this.emailError = true;
        this.emailSuccess = false;
        return;
      } else if(this.password === null || this.password.length < 6){
        this.passwordError = true;
        this.passwordSuccess = false;
        return;
      }

      this.loading = true;
      this.$store
          .dispatch(REGISTER, {first_name, last_name, username, email, password, 'roles': "USER"})
          .then(() => this.$router.push({name: "userDashboard"}))
          .catch((error) => {
            this.loading = false;
            this.error = error.error === undefined ? 'No internet connection.' : error.error;
          });
    },
    /*computed: {
      ...mapState({
        errors: state => state.auth.errors
      })
    }*/
  }
};
