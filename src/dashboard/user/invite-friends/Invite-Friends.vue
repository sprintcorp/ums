<template>
  <div>
    <!-- page title area start -->
    <div class="page-title-area">
      <div class="row align-items-center">
        <div class="col-sm-6 spaced">
          <div class="breadcrumbs-area clearfix">
            <h4 class="page-title pull-left">Invitations</h4>
            <ul class="breadcrumbs pull-left">
              <li>
                <router-link :to="{name:'userDashboard'}" tag="a" >Home</router-link>
              </li>
              <li>
                <span>Invite Friends</span>
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
            <div class="col-12 mt-5">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">Personal Information</h4>
                  <form>
                        <div class="row" v-for="field in fields" >
                         
                          <div class="form-group col-md-5">
                            <label for="email" class="sr-only">Email Address</label>
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="xyz@yahoo.com"
                              v-model="field.email"
                            >
                          </div>

                          <div class="form-group col-md-5">
                            <label for="fullname" class="sr-only">
                              Full Name
                              (optional)
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="fullname"
                              placeholder="Asefon Pelumi"
                              v-model="field.fullname"
                            >
                          </div>

                          <div class="form-group col-md-2" >
                            <button  type="button" class="btn btn-danger btn-sm" @click="removeField($index)"  >
                              <span class="ti ti-close"></span>
                            </button>
                          </div>
                        </div>
                     
                      <button
                        type="button"
                        class="btn btn-success btn-sm  mt-4 pr-4 pl-4 float-left"
                        @click="addField"
                      >
                        <span class="ti ti-plus"></span>
                      </button>
                      <button type="submit" class="btn btn-primary btn-sm mt-4 pr-4 pl-4 float-left">Update</button>
                  
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
<script src="./invite-friends.js"></script>
<style scoped>@import url(./invite-friends.css);</style>
