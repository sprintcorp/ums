<template>
    <div>

        <div class="alert alert-danger alert-dismissible" v-if="error != null">
            <span>{{ error }}</span>
            <span class="close" @click="error = null">&times;</span>
        </div>

        <form id="login" name="loginForm" class="auth-form" @submit.prevent.stop="onSubmit(username, password)">
            <div class="form-group">
                <input type="text" class="form-control" v-model="username"
                       placeholder="Email or Username" :class="{'is-invalid': usernameError}">
                <span class="invalid-feedback" v-if="usernameError">Invalid Username</span>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="password"
                       placeholder="Password" :class="{'is-invalid': passwordError}">
                <span class="invalid-feedback" v-if="passwordError">Invalid Password</span>
            </div>
            <div class="btn-group btn-block" role="group" aria-label="Basic example">
                <button type="submit" class="btn btn-yellow">
                    <span v-if="!loading">Login</span>
                    <span v-else>
                        <span class="spinner"></span>
                        <span class="spin-text">Verifying...</span>
                    </span>
                </button>
                <button type="button" class="btn btn-white" @click="switchToRegister">Sign Up</button>
            </div>
            <router-link to="/forgot-password">
                <a role="button" class="btn btn-link btn-block text-dark text-capitalize">Forgot password</a>
            </router-link>
        </form>
    </div>
</template>

<script src="./login.js"></script>
<style scoped>@import url('./login.css');</style>
