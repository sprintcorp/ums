import FacebookLogin from 'facebook-login-vuejs';
import {saveUserData} from "../../../utils/cache";

export default {
    data(){
        return {
            id: '',
            name: '',
            email: '',
            fbConnected: false,
            label: 'Facebook'
        }
    },
    components: {
        FacebookLogin
    },
    methods: {
        fbGetUserData() {
            this.FB.api('/me', 'GET', { fields: 'id,name,email' },
                user => {
                    this.id = user.id;
                    this.email = user.email;
                    this.name = user.name;

                    this.fbConnected = true;

                    saveUserData(JSON.stringify(user));
                    this.$router.push({name: "userDashboard"});
                }
            )
        },
        fbSdkLoaded(payload) {
            this.fbConnected = payload.isConnected;
            this.FB = payload.FB;
            if (this.isConnected) this.fbGetUserData()
        },
        fbLogin() {
            this.isConnected = true;
            this.fbGetUserData()
        },
        fbLogout() {
            this.fbConnected = false;
        }
    }
};