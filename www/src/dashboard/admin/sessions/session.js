export default {
    data(){
        return {
            activeApp: null,
            apps: [
                {name: 'KMUS', id: 1},
                {name: 'Plan Success', id: 2},
                {name: 'DEB', id: 3},
            ],
            title: '',
        }
    },
    mounted(){
      this.activeApp = this.apps[0].name;
    },
    methods: {
        showSession(){

        },
        loadMoreApps(){

        }
    }
}