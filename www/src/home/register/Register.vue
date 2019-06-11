<template>
    <div>

        <div class="alert alert-danger alert-dismissible" v-if="error != null">
            <span>{{ error }}</span>
            <span class="close" @click="error = null">&times;</span>
        </div>

        <form id="register" class="auth-form"
              v-on:submit.prevent="onSubmit(first_name, last_name, username, email, password);">
            <div class="form-group">
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" v-model="first_name" placeholder="First Name">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" v-model="last_name" placeholder="Last Name">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="username" placeholder="Username"
                       :class="{'is-invalid': usernameError, 'is-valid': usernameSuccess}">
                <span class="invalid-feedback" v-if="usernameError">Enter a valid username.</span>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" v-model="email" placeholder="Email Address"
                       :class="{'is-invalid': emailError, 'is-valid': emailSuccess}">
                <span class="invalid-feedback" v-if="emailError">Enter a valid email address.</span>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="password" placeholder="Password"
                       :class="{'is-invalid': passwordError, 'is-valid': passwordSuccess}">
                <span class="invalid-feedback" v-if="passwordError">Passwords must be at least 6 characters long.</span>
            </div>
            <div class="btn-group btn-block" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-white" @click="switchToLogin">Login</button>
                <button type="submit" class="btn btn-yellow">
                    <span v-if="!loading">Sign Up</span>
                    <span v-else>
                        <span class="spinner"></span>
                        <span class="spin-text">Signing up...</span>
                    </span>
                </button>
            </div>

            <a role="button" class="btn-link btn-block text-dark text-capitalize">&nbsp;</a>
        </form>
    </div>
</template>

<script src="./register.js"></script>
<style scoped>@import url('./register.css');</style>
