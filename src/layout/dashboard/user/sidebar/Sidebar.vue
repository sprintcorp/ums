<template>
    <div class="sidebar-menu">
        <div class="sidebar-header">
            <div class="logo">
                <a href="#">
                    <img src alt="logo">
                </a>
            </div>
        </div>
        <div class="main-menu">
            <div class="menu-inner">
                <nav>
                    <ul class="metismenu" id="menu" v-bar="{ preventParentScroll: true,scrollThrottle: 30}">

                        <router-link :to="{name:'userDashboard'}" tag="li" active-class="active" exact>
                            <a><i class="ti-dashboard"></i>
                                <span>Dashboard</span></a>
                        </router-link>

                        <router-link :to="{name:'userUpdateProfile'}" tag="li" active-class="active" exact>
                            <a><i class="ti-user"></i>
                                <span>Profile</span></a>
                        </router-link>

                        <router-link :to="{name:'userChangePassword'}" tag="li" active-class="active" exact>
                            <a><i class="ti-lock"></i>
                                <span>Account Settings</span></a>
                        </router-link>

                        <router-link :to="{name:'inviteFriends'}" tag="li" active-class="active" exact>
                            <a><i class="ti-user"></i>
                                <span>Invite Friends</span></a>
                        </router-link>

                        <router-link :to="{name:'userReport'}" tag="li" active-class="active" exact>
                            <a><i class="ti-user"></i>
                                <span>User Report</span></a>
                        </router-link>

                        <div  tag="li" @click="logout();" class="active" exact>
                            <i class="ti ti-export"></i>
                                <span>Logout</span>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <!-- sidebar menu area end -->
</template>
<script src="./sidebar.js"></script>
<style scoped>@import url('./sidebar.css');</style>

