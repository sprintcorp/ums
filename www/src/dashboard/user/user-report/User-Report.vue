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
                <router-link :to="{name:'userDashboard'}" tag="a">Home</router-link>
              </li>
              <li>
                <span>User Report</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- page title area end -->
    <div class="main-content-inner">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 mt-5">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">
                    User Report For
                    <span class="text-success">{{ name }}</span>
                  </h4>
                  <div class="float-right ">
                    <h4 class="header-title">Export As:</h4>
                    <div class="btn-group export " role="group" aria-label="">
                      <button type="button" class="btn btn-primary">Doc</button>
                      <button type="button" class="btn btn-primary">Excel</button>
                      <button type="button" class="btn btn-primary">PDF</button>
                    </div>
                  </div>
                  <v-client-table
                    :data="tableData"
                    :columns="columns"
                    :options="options"
                    class="filter-table "
                  ></v-client-table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./user-report.js"></script>
<style scoped >@import url(./user-report.css);</style>