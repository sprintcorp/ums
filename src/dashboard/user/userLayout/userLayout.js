//Importing the shared component of the User Dashbord
import userHeader from "../../../layout/dashboard/user/header/Header.vue";
import userSidebar from "../../../layout/dashboard/user/sidebar/Sidebar.vue";
import userFooter from "../../../layout/dashboard/user/footer/Footer.vue";
export default {
    data() {
        return {
            toggle: false
        }
    },
    components: {
        userHeader,
        userSidebar,
        userFooter
    },
    methods: {
        sideBarToggled() {
            this.toggle = !this.toggle;
        }
    },
};