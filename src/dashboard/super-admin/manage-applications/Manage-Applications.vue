<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <nav class="breadcrumb">
          <a class="breadcrumb-item" href="./">Home</a>
          <a class="breadcrumb-item" href="#">Applicatons</a>
          <span class="breadcrumb-item active">Manage Applications</span>
        </nav>
        <div class="page-title">
          <h5>
            Manage Applications
          </h5>
          <div class="button-group">
            <button type="button" class="btn btn-sm btn-outline-dark">Create New</button>
          </div>
        </div>
        <div class="horizontal-rule mt-1"></div>
      </div>
<div class="app-mgt">
    <div class="card">
            <div class="card-body">
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
</template>

<script src="./manage-applications.js"></script>
<style scoped>
@import url(./manage-applications.css);
</style>
