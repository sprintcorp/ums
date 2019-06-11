<template>
  <div>
    <!-- page title area start -->
    <div class="page-title-area">
      <div class="row align-items-center">
        <div class="col-sm-6 spaced">
          <div class="breadcrumbs-area clearfix">
            <h4 class="page-title pull-left">Dashboard</h4>
            <ul class="breadcrumbs pull-left">
              <li>
                <router-link :to="{name:'userDashboard'}" tag="a">Home</router-link>
              </li>
              <li>
                <span>Dashboard</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- page title area end -->
    <div class="main-content-inner">
      <div class="row">
        <div class="col-md-4 mt-5 mb-3">
          <div class="card">
            <div class="seo-fact sbg4">
              <div class="p-4 d-flex justify-content-between align-items-center">
                <div class="seofct-icon">
                  <i class="ti-user"></i>Users
                </div>
                <h2>4k</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-5 mb-3">
          <div class="card">
            <div class="seo-fact sbg4">
              <div class="p-4 d-flex justify-content-between align-items-center">
                <div class="seofct-icon">
                  <i class="ti-timer"></i>Sessions
                </div>
                <h2>790.2k</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mt-md-5 mb-3">
          <div class="card">
            <div class="seo-fact sbg4">
              <div class="p-4 d-flex justify-content-between align-items-center">
                <div class="seofct-icon">
                  <i class="ti-thumb-up"></i> Groups
                </div>
                <h2>39</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-12 mt-5">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">User Statistics</h4>
              <div id="user-statistics"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./dashboard.js"></script>
<style scoped>@import url(./dashboard.css);</style>


