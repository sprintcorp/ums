import {destroyToken} from "../../../../utils/cache";

export default {
    methods: {
        logout() {
            window.confirm('Are You Sure You Want to Quit this App');
            destroyToken();
            this.$router.push({name: "Authentication"})
        }
    }
}