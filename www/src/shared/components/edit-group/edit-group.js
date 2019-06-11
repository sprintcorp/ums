export default {
    data() {
        return {
            tags:[]
        }
    },
    props: ['toggleEdit'],
    methods: {
        toggleClose() {
            this.$emit("sideBarCollapsed", false);
        }
    },
}