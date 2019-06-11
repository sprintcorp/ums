<template>
  <div class="container">
    <div class="col-md-4 offset-md-4 auth">
      <form action class="auth-form" @submit.prevent="onSubmit()">

          <div class="alert alert-danger alert-dismissible" v-if="error != null && !loading">
              <span>{{ error }}</span>
              <span class="close" @click="error = null">&times;</span>
          </div>

          <div class="alert alert-success alert-dismissible" v-if="success && !loading">
              <span>
                  A password reset link has been sent to your email address.<br><br>
                  <router-link :to="{name: 'Authentication'}">Login</router-link> to your mailbox to complete the process.
              </span>
              <span class="close" @click="error = null">&times;</span>
          </div>

          <div class="form-group">
          <input
            type="text"
            name="username"
            id
            class="form-control"
            placeholder="Email or Username"
            v-model="username"
          >
        </div>
        <div class="btn-group btn-block" role="group" aria-label="Basic example">
          <button type="submit" class="btn btn-yellow">
            <span v-if="!loading">Verify Email</span>
            <span v-else>
                <span class="spinner"></span>
                <span class="spin-text">Verifying...</span>
            </span>
          </button>
        </div>
        <router-link to="/">
          <a role="button" class="btn btn-link btn-block text-dark text-capitalize">Go Back to Login</a>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script src="./forgot-password.js"></script>
<style>@import url("./forgot-password.css");</style>

