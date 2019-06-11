export default {
    data() {
        return {
            toggleAdd: false,
            toggleEdit: false
        }
    },
    methods: {
        toggleAddGroup() {
            this.toggleAdd = !this.toggleAdd;
        },
        toggleEditGroup() {
            this.toggleEdit = !this.toggleEdit;

        }
    },
};