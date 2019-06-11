import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
/**
 * Exporting routes of the application to be imported in main.js
 */
export default new Router({
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
                name: 'userDashboard'
            },
            children: [{
                    path: 'dashboard',
                    component: () => import('../dashboard/user/dashboard/Dashboard.vue'),
                    name: 'userDashboard'
                },
                {
                    path: 'update-profile',
                    component: () => import('../dashboard/user/update-profile/Update-Profile.vue'),
                    name: 'userUpdateProfile'
                },
                {
                    path: 'change-password',
                    component: () => import('../dashboard/user/change-password/Change-Password.vue'),
                    name: 'userChangePassword'
                },
                {
                    path: 'invite-friends',
                    component: () => import('../dashboard/user/invite-friends/Invite-Friends.vue'),
                    name: 'inviteFriends'
                },
                {
                    path: 'user-report',
                    component: () => import('../dashboard/user/user-report/User-Report.vue'),
                    name: 'userReport'
                }
            ]
        },
        {
            path: '/admin',
            component: () => import('../dashboard/admin/adminLayout/AdminLayout.vue'),
            redirect: {
                name: 'adminDashboard'
            },
            children: [{
                    path: 'dashboard',
                    component: () => import('../dashboard/admin/dashboard/Dashboard.vue'),
                    name: 'adminDashboard'
                },
                {
                    path: 'profile',
                    component: () => import('../dashboard/admin/profile/Profile.vue'),
                    name: 'adminProfile'
                },
                {
                    path: 'update-profile',
                    component: () => import('../dashboard/user/update-profile/Update-Profile.vue'),
                    name: 'adminUpdateProfile'
                },
                {
                    path: 'manage-groups',
                    component: () => import('../dashboard/admin/manage-groups/Manage-Groups.vue'),
                    name: 'manageGroups'
                },
                {
                    path: 'manage-users',
                    component: () => import('../dashboard/admin/manage-users/Manage-Users.vue'),
                    name: 'manageUsers'
                },
                {
                    path: 'sessions',
                    component: () => import('../dashboard/admin/sessions/Sessions.vue'),
                    name: 'adminSession'
                },
                {
                    path: ':id/sessions',
                    component: () => import('../dashboard/admin/sessions/Sessions.vue'),
                    name: 'adminUserSession'
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
});