<template>
  <div>

    <!-- page title area start -->
    <div class="page-title-area">
      <div class="row align-items-center">
        <div class="col-sm-6 spaced">
          <div class="breadcrumbs-area clearfix">
            <h4 class="page-title pull-left">Account Security</h4>
            <ul class="breadcrumbs pull-left">
              <li>
                <router-link :to="{name:'userDashboard'}" tag="a">Home</router-link>
              </li>
              <li>
                <span>Change Password</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- page title area end -->
    <div class="main-content-inner">
      <div class="row">
        <div class="col-lg-6 col-ml-12">
          <div class="row">
            <!-- basic form start -->
            <div class="col-lg-6 offset-lg-3 mt-5">
              <div class="card">

                <div class="alert alert-danger alert-dismissible" v-if="success == true">
                  <span>Password updated successfully</span>
                  <span class="close" @click="success = false">&times;</span>
                </div>

                <div class="alert alert-danger alert-dismissible" v-if="error != null">
                  <span>{{ error }}</span>
                  <span class="close" @click="error = null">&times;</span>
                </div>

                <div class="card-body">
                  <h4 class="header-title">Change Password</h4>
                  <form id="changepassword" class="auth-form"
                        v-on:submit.prevent="onSubmit(old_password, new_password, confirm_password);">
                    <div class="form-group">
                      <label for class="sr-only">Current Password</label>
                      <input type="password" class="form-control" v-model="old_password" placeholder="Current Password"
                             :class="{'is-invalid': old_passwordError, 'is-valid': old_passwordSuccess}">
                      <span class="invalid-feedback" v-if="old_passwordError">Enter your current password.</span>
                    </div>
                    <div class="form-group">
                      <label for class="sr-only">New Password</label>
                      <input type="password" class="form-control" v-model="new_password" placeholder="New Password"
                             :class="{'is-invalid': new_passwordError, 'is-valid': new_passwordSuccess}">
                      <span class="invalid-feedback" v-if="new_passwordError">Enter a new password.</span>
                    </div>
                    <div class="form-group">
                      <label for class="sr-only">Confirm Password</label>
                      <input type="password" class="form-control" v-model="confirm_password" placeholder="Confirm Password"
                             :class="{'is-invalid': confirm_passwordError, 'is-valid': confirm_passwordSuccess}">
                      <span class="invalid-feedback" v-if="confirm_passwordError">Confirm your new password.</span>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4 pr-4 pl-4 float-left">Update</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./change-password.js" ></script>
<style scoped>
@import url(./change-password.css);
</style>

