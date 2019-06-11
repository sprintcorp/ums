export default {
    data(){
        return {
            tags: []
        }
    },
    props: ['toggleAdd'],
    methods: {
        toggleClose(){
            this.$emit("sideBarCollapsed", false);
        }
    },
}
