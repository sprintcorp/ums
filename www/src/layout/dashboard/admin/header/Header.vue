<template>
  <!-- header area start -->
  <div class="header-area">
    <div class="row align-items-center">
      <!-- nav and search button -->
      <div class="col-md-6 col-sm-8 clearfix">
        <div class="nav-btn pull-left" @click="toggleSideBar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="search-box pull-left">
          <form action="#">
            <input type="text" name="search" placeholder="Search..." required>
            <i class="ti-search"></i>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- header area end -->
</template>

<script src="./header.js"></script>
<style scoped>@import url('./header.css');</style>