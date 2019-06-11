<template>
  <div>
    <div  class="page-container" :class=" { sbar_collapsed : toggle }">
      <userSidebar/>
      <div class="main-content">
        <userHeader :toggleSideBar="sideBarToggled" />
        <router-view></router-view>
        <userFooter/>
      </div>
    </div>
  </div>
</template>


<script src="./userLayout.js"></script>
<style scoped>@import url(./userLayout.css);</style>