import {RESET_PASSWORD} from "../../store/actions/actions.type";

export default {
    data(){
        return {
            username: null,
            error: null,
            success: false,
            loading: false
        }
    },
    methods: {
        toggleError(){
            this.error = !this.error;
            if(this.error){

            }
        },
        onSubmit(){

            if(this.loading) return;

            if(this.username == null || this.username.length === 0){
                this.error = 'Enter your email address or username.';
            } else {

                this.loading = true;
                this.success = false;

                this.$store.dispatch(RESET_PASSWORD, {'username': this.username})
                    .then(() => {

                        this.loading = false;
                        this.success = true;
                        this.error = null;
                    }).catch((error) => {
                        this.error = error == undefined ? 'No internet access.' : error.data.error;
;                        this.loading = false;
                });
            }
        }
    }
}