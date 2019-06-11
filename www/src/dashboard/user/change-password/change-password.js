import {mapState} from "vuex";
import {EDIT_PASSWORD} from "../../../store/actions/actions.type";
import {getUserData} from "../../../utils/cache";

export default {
    data() {
        return {
            old_password: null,
            new_password: null,
            confirm_password: null,
            confirm_passwordError: false,
            old_passwordError: false,
            new_passwordError: false,
            new_passwordSuccess: false,
            old_passwordSuccess: false,
            confirm_passwordSuccess: false,
            loading: false,
            success: false,
            error: null,
        };
    },

    methods: {
        onSubmit(old_password, new_password, confirm_password){
            if (this.loading) return; // Prevent overlapping requests.
            this.old_passwordError = false;
            this.new_passwordError = false;
            this.confirm_passwordError = false;
            this.error = null;

            if (this.new_password !== this.confirm_password) {
                this.new_passwordError = true;
                    this.confirm_passwordError = true;
                return;
            } else if (this.new_password === null || this.new_password.length < 6) {
                this.new_passwordError = true;
                this.new_passwordSuccess = false;
                return;
            }

            let user = getUserData();

            if(user === null || !user.id || user.id < 1){
                this.error = 'User not logged in!';
                return;
            }

            this.loading = true;
            this.$store
                .dispatch(EDIT_PASSWORD, user.id, {old_password,new_password})
                .then(() => {
                    this.error = null;
                    this.success = true;
                })
                .catch((error) => {
                    this.loading = false;
                    this.error = error === undefined ? 'No internet connection.' : error.data.error;
                });
        },
    },
}