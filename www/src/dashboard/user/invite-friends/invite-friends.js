export default {
    data() {
        return {
            fields: [{
                email: '',
                fullname: ''
            }],
        }
    },
    methods: {
        addField: function (index) {
            this.fields.push({
                email: '',
                fullname: ''
            });
        },
        removeField: function (index) {
            this.fields.splice(index, 1);
        }
    },
};