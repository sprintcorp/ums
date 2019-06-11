import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
/**
 * Exporting routes of the application to be imported in main.js
 */
let router =  new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: () => import('../home/authLayout/AuthLayout.vue'),
        name: 'Authentication'
    },
        {
            path: '/forgot-password',
            component: () => import('../home/forgot-password/Forgot-Password.vue'),
            name: 'forgotPassword'
        },
        {
            path: '/reset-password',
            component: () => import('../home/reset-password/Reset-Password.vue'),
            name: 'resetPassword'
        },
        {
            path: '/user',
            component: () => import('../dashboard/user/userLayout/userLayout.vue'), //Lazy Loading
            redirect: {
                name: 'userDashboard',

                meta: {
                    role:'ROLE_USER'
                }
            },
            children: [{
                path: 'dashboard',
                component: () => import('../dashboard/user/dashboard/Dashboard.vue'),
                name: 'userDashboard',

                meta: {
                    role:'ROLE_USER'
                }
            },
                {
                    path: 'update-profile',
                    component: () => import('../dashboard/user/update-profile/Update-Profile.vue'),
                    name: 'userUpdateProfile',

                    meta: {
                        role:'ROLE_USER'
                    }
                },
                {
                    path: 'change-password',
                    component: () => import('../dashboard/user/change-password/Change-Password.vue'),
                    name: 'userChangePassword',

                    meta: {
                        role:'ROLE_USER'
                    }
                },
                {
                    path: 'invite-friends',
                    component: () => import('../dashboard/user/invite-friends/Invite-Friends.vue'),
                    name: 'inviteFriends',

                    meta: {
                        role:'ROLE_USER'
                    }
                },
                {
                    path: 'user-report',
                    component: () => import('../dashboard/user/user-report/User-Report.vue'),
                    name: 'userReport',

                    meta: {
                        role:'ROLE_USER'
                    }
                }
            ]
        },
        {
            path: '/admin',
            component: () => import('../dashboard/admin/adminLayout/AdminLayout.vue'),
            redirect: {
                name: 'adminDashboard',

                meta: {
                   role:'ROLE_ADMIN'
                }
            },
            children: [{
                path: 'dashboard',
                component: () => import('../dashboard/admin/dashboard/Dashboard.vue'),
                name: 'adminDashboard',

                meta: {
                    role:'ROLE_ADMIN'
                }
            },
                {
                    path: 'profile',
                    component: () => import('../dashboard/admin/profile/Profile.vue'),
                    name: 'adminProfile',

                    meta: {
                        role:'ROLE_ADMIN'
                    }
                },
                {
                    path: 'update-profile',
                    component: () => import('../dashboard/user/update-profile/Update-Profile.vue'),
                    name: 'adminUpdateProfile',

                    meta: {
                        role:'ROLE_ADMIN'
                    }
                },
                {
                    path: 'manage-groups',
                    component: () => import('../dashboard/admin/manage-groups/Manage-Groups.vue'),
                    name: 'manageGroups',

                    meta: {
                        role:'ROLE_ADMIN'
                    }
                },
                {
                    path: 'manage-users',
                    component: () => import('../dashboard/admin/manage-users/Manage-Users.vue'),
                    name: 'manageUsers',

                    meta: {
                        role:'ROLE_ADMIN'
                    }
                },
                {
                    path: 'sessions',
                    component: () => import('../dashboard/admin/sessions/Sessions.vue'),
                    name: 'adminSession',

                    meta: {
                        role:'ROLE_ADMIN'
                    }
                },
                {
                    path: ':id/sessions',
                    component: () => import('../dashboard/admin/sessions/Sessions.vue'),
                    name: 'adminUserSession',

                    meta: {
                        role:'ROLE_ADMIN'
                    }
                }
            ]
        },
        {
            path: '/super-admin',
            component: () => import('../dashboard/super-admin/superAdminLayout/superAdminLayout.vue'),
            redirect: {
                name: 'superAdminDashboard'
            },
            children: [{
                path: 'dashboard',
                component: () => import('../dashboard/super-admin/dashboard/Dashboard.vue'),
                name: 'superAdminDashboard'
            },
                {
                    path: 'profile',
                    component: () => import('../dashboard/super-admin/profile/Profile.vue'),
                    name: 'superAdminProfile'
                },
                {
                    path: 'update-profile',
                    component: () => import('../dashboard/super-admin/update-profile/Update-Profile.vue'),
                    name: 'superAdminUpdateProfile'
                },
                {
                    path: 'sessions',
                    component: () => import('../dashboard/super-admin/sessions/Sessions.vue'),
                    name: 'superAdminSession'
                },
                {
                    path: ':id/sessions',
                    component: () => import('../dashboard/super-admin/sessions/Sessions.vue'),
                    name: 'superAdminUserSession'
                },
                {
                    path: 'new-application',
                    component: () => import('../dashboard/super-admin/new-application/New-Application.vue'),
                    name: 'newApplication'
                },
                {
                    path: 'edit-application',
                    component: () => import('../dashboard/super-admin/edit-application/Edit-Application.vue'),
                    name: 'editApplication'
                },
                {
                    path: 'manage-applications',
                    component: () => import('../dashboard/super-admin/manage-applications/Manage-Applications.vue'),
                    name: 'manageApplications'
                },
                {
                    path: 'view-application',
                    component: () => import('../dashboard/super-admin/view-application/View-Application.vue'),
                    name: 'viewApplications'
                }
            ]
        },
        {
            path: '**',
            component: () => import('../home/404/404.vue'),
            name: 'page-not-found'

        }

    ]
})
// const openRoutes = ['forgotPassword','resetPassword'];
// router.beforeEach( (to, from, next){
//
//     if (!openRoutes.includes(to.name)) {
//         next()
//     } else {
//         next()
//     }
// })
export default router;