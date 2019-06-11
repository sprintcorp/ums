<template>
    <div class="container">
        <div class="col-md-4 offset-md-4 offset-md-3 auth">
            <!--<div class="switch-form">
                <label class="radio">
                    <input type="radio" v-model="picked" id="login" value="login">
                    <span class="checkround"></span>
                </label>

                <label class="radio">
                    <input type="radio" v-model="picked" id="register" value="register">
                    <span class="checkround"></span>
                </label>
            </div>-->
            <div class="form-heading">
                <span>
                    <img src="./learnify_new2.png" />
                </span>
            </div>

            <keep-alive>
                <component :is="picked" @switchPage="switchPage"></component>
            </keep-alive>

            <div class="divider"><span>OR</span></div>

            <div class="row social-login">
                <div class="col-6">
                    <FacebookLogin/>
                </div>
                <div class="col-6 pl-0">
                    <GoogleLogin/>
                </div>
            </div>

            <div class="text-center mt-4">
                <router-link :to="{name: 'userDashboard'}" active-class="active" exact>
                    <a><span>User | </span></a>
                </router-link>
                <router-link :to="{name: 'adminDashboard'}" active-class="active" exact>
                    <a><span> Admin </span></a>
                </router-link>
                <router-link :to="{name: 'superAdminDashboard'}" active-class="active" exact>
                    <a> <span> |  Super-Admin</span></a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script src="./authLayout.js"></script>
<style scoped>@import url('./authLayout.css');</style>
