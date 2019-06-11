<template>
  <div>
    <!-- page title area start -->
    <div class="page-title-area">
      <div class="row align-items-center">
        <div class="col-sm-6 spaced">
          <div class="breadcrumbs-area clearfix">
            <h4 class="page-title pull-left">Profile</h4>
            <ul class="breadcrumbs pull-left">
              <li><router-link :to="{name:'userDashboard'}" tag="a" >Home</router-link></li>
              <li><span>Edit Profile</span></li>
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
                <div class="card-body">
                  <h4 class="header-title">Personal Information</h4>
                  <form>

                    <div class="form-group">
                      <label for="fname" class="sr-only">First Name</label>
                      <input type="text" class="form-control" id="fname" placeholder="Asefon">
                    </div>

                    <div class="form-group">
                      <label for="lname" class="sr-only">Last Name</label>
                      <input type="text" class="form-control" id="lname" placeholder="Pelumi">
                    </div>

                    <div class="form-group">
                      <label for="username" class="sr-only">Username</label>
                      <input type="password" class="form-control" id="username"
                             placeholder="WillyPellz">
                    </div>

                    <button type="submit"
                            class="btn btn-md btn-primary mt-4 pr-4 pl-4 float-left">Update</button>
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

<script src="./profile.js"></script>
<style scoped>@import url(./profile.css);</style>
