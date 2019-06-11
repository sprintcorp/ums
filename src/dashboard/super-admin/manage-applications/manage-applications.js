export default {
     data() {
         return {
             toggleAdd: false,
             toggleEdit: false,
             columns: [
                 "id",
                 "name",
                 "users",
                 "created",
                 "edited",
                 "status",
                 "actions",

             ],
             tableData: [{
                 id: "1",
                 name: "Facebook",
                 users: "160k",
                 created: "May 21, 2007",
                 edited: "May 21, 2007",
                 status: "Active",
                 actions: `actions_button`,

             },
            {
                id: "2",
                name: "Twitter",
                users: "120k",
                created: "Jun 15, 2009",
                edited: "Nov 21, 2017",
                status: "Active",
                actions: `actions_button`,

            },
        {
            id: "3",
            name: "PinInterest",
            users: "78k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        },
        {
            id: "4",
            name: "Behance",
            users: "159k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        },
        {
            id: "5",
            name: "Figma",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        },
        {
            id: "6",
            name: "Telegram",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        },
        {
            id: "7",
            name: "Whatsapp",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        },
        {
            id: "8",
            name: "Plan Success",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        },
        {
            id: "9",
            name: "KMUS",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        },
        {
            id: "10",
            name: "Wix",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        }, {
            id: "11",
            name: "Shopify",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        },
        {
            id: "12",
            name: "Alibaba",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        }, {
            id: "13",
            name: "Amazon",
            users: "160k",
            created: "May 21, 2007",
            edited: "May 21, 2007",
            status: "Active",
            actions: `actions_button`,

        }
    ],
             options: {
                 headings: {
                     id: "ID",
                     name: "Name",
                     users: "Total Users",
                     created: "Time Created",
                     edited: "Last Edited",
                     status: "Status",
                     actions: "Actions",

                 },
                 sortable: ["username", "email"],
                 filterable: ["username", "email"]
             }
         };
     }
}