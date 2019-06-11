<template>
  <div class="sidebar-menu">
    <div class="sidebar-header">
      <div class="logo text-center">
        <a href="#">
          <!-- <img src alt="logo"> -->
          <span class="mr-2">UMS</span>
          <small>-Super Admin</small>
        </a>
      </div>
    </div>
    <div class="main-menu">
      <div class="menu-inner">
        <nav>
          <ul class="metismenu" id="menu" v-bar="{ preventParentScroll: true,scrollThrottle: 30}">
            <router-link :to="{name:'superAdminDashboard'}" tag="li" active-class="active" exact>
              <a>
                <i class="ti-dashboard"></i>
                <span>Dashboard</span>
              </a>
            </router-link>

            <router-link :to="{name:'manageGroups'}" tag="li" active-class="active" exact>
              <a>
                <i class="ti-user"></i>
                <span>Manage users</span>
              </a>
            </router-link>

            <router-link :to="{name:'manageGroups'}" tag="li" active-class="active" exact>
              <a>
                <i class="ti-lock"></i>
                <span>Manage Groups</span>
              </a>
            </router-link>

            <router-link :to="{name:'superAdminUserReport'}" tag="li" active-class="active" exact>
              <a>
                <i class="ti-lock"></i>
                <span>Users Report</span>
              </a>
            </router-link>

              <router-link :to="{name: 'adminSession'}" tag="li" active-class="active" exact>
                  <a ><i class="ti ti-bar-chart"></i>
                      <span>Sessions</span></a>
              </router-link>



              <router-link to="/" tag="li" active-class="active" exact>
                <a ><i class="ti ti-export"></i>
                <span>Logout</span></a>
              </router-link>

          </ul>
        </nav>
      </div>
    </div>
  </div>
  <!-- sidebar menu area end -->
</template>

<script src="./sidebar.js"></script>
<style scoped>@import url('./sidebar.css');</style>
