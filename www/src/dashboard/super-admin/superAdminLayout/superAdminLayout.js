//Importing the shared component of the User Dashbord
import superAdminHeader from "../../../layout/dashboard/super-admin/header/Header.vue";
import superAdminSidebar from "../../../layout/dashboard/super-admin/sidebar/Sidebar.vue";
import superAdminFooter from "../../../layout/dashboard/super-admin/footer/Footer.vue";

export default {
    data() {
        return {
            toggle: false
        }
    },
    components: {
        superAdminHeader,
        superAdminSidebar,
        superAdminFooter
    },
    methods: {
        sideBarToggled() {
            this.toggle = !this.toggle;
        }
    },
};