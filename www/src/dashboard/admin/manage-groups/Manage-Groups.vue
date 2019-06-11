<template>
  <div>
    <!-- page title area start -->
    <div class="page-title-area">
      <div class="row align-items-center">
        <div class="col-sm-6 spaced">
          <div class="breadcrumbs-area clearfix">
            <h4 class="page-title pull-left">Manage Groups</h4>
            <ul class="breadcrumbs pull-left">
              <li>
                <router-link :to="{name:'adminDashboard'}" tag="a">Home</router-link>
              </li>
              <li>
                <span>Manage Groups</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- page title area end -->
    <div class="main-content-inner">
      <div class="row">
        <!-- Progress Table start -->
        <div class="col-12 mt-5">
          <a role="button" class="btn btn-yellow mb-3" @click="toggleAddGroup"> <i class="fa fa-users" aria-hidden="true"></i> Add Group</a>
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Groups</h4>
              <div class="single-table">
                <v-client-table
                  :data="tableData"
                  :columns="columns"
                  :options="options"
                  class="filter-table"
                  
                ></v-client-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AddGroup :toggleAdd.sync="toggleAdd" @sideBarCollapsed=" toggleAdd = $event"/>
    <EditGroup :toggleAdd.sync="toggleEdit" @sideBarCollapsed=" toggleEdit = $event"/>
  
  </div>
</template>

<script src="./manage-groups.js"></script>
<style scoped>
@import url(./manage-groups.css);
</style>
