import AddUser from "../../../shared/components/add-user/Add-User.vue";
import EditUser from "../../../shared/components/edit-user/Edit-User.vue";
export default {
    data() {
        return {
            toggleAdd: false,
            toggleEdit: false,
            columns: [
                    "id",
                    "name",
                    "email",
                    "actions",

                ],
                tableData: [{
                    id: "1",
                    name: "Family & Friends",
                    email: "emmaomoh@gmail.com",
                    actions: `<p>Omohemma</p>`,

                }],
                options: {
                    headings: {

                        id: "id",
                        name: "Username",
                        email: "Email Address",
                        actions: "Actions",

                    },
                    sortable: ["username","email"],
                    filterable: ["username","email"]
                }
        };
    },
    components: {
        AddUser,
        EditUser
    },
    methods: {
        toggleAddUser() {
            this.toggleAdd = true;
        },
        toggleEditUser() {
            this.toggleEdit = true;
        }
    }
};