import AddGroup from '../../../shared/components/add-group/Add-Group.vue'
import EditGroup from '../../../shared/components/edit-group/Edit-Group.vue'

export default {
    data() {
        return {
            toggleAdd: false,
            toggleEdit: false,
            columns: [
                "id",
                "name",
                "desc",
                "actions",
               
            ],
            tableData: [{
                id: "1",
                name: "Family & Friends",
            desc: "192.168.46.9",
                actions: 'buttons',
                
            }],
            options: {
                headings: {
                  
                    id: "id",
                    name: "Group Name",
                    ip: "Description",
                    actions: "Actions",
                    
                },
                sortable: ["name"],
                filterable: ["name"]
            }
        }
    },
    components:{
        AddGroup,
        EditGroup
    },
    methods: {
        toggleAddGroup() {
            this.toggleAdd = true;
            
        },
        toggleEditGroup() {
            this.toggleEdit = true;

        }
    },
};