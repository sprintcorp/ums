import GoogleLogin from 'vue-google-login';
import {saveUserData} from "../../../utils/cache";

export default {
    data(){
        return {
            id: '',
            name: '',
            email: '',
            googleConnected: false,
            googleLoginParams: {
                client_id: '27707176901-9s8m5hp1n9idmf3o0lcpa1uc1coesjgj.apps.googleusercontent.com'
            }
        }
    },
    components: {
        GoogleLogin
    },
    methods: {
        googleSuccess(user){
            this.id = user.id;
            this.email = user.email;
            this.name = user.name;

            this.googleConnected = true

            saveUserData(JSON.stringify(user));
            this.$router.push({name: "userDashboard"});
        },
        googleFailure(){
            this.googleConnected = false
        }
    }
};