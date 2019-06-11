//Importing the shared component of the admin Dashbord
import adminHeader from "../../../layout/dashboard/admin/header/Header.vue";
import adminSidebar from "../../../layout/dashboard/admin/sidebar/Sidebar.vue";
import adminFooter from "../../../layout/dashboard/admin/footer/Footer.vue";

export default {
    data() {
        return {
            toggle: false
        }
    },
    components: {
        adminHeader,
        adminSidebar,
        adminFooter
    },
    methods: {
        sideBarToggled() {
            this.toggle = !this.toggle;
        }
    },
};