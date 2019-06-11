<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <nav class="breadcrumb">
          <a class="breadcrumb-item" href="./">Home</a>
          <a class="breadcrumb-item" href="#">Applicatons</a>
          <span class="breadcrumb-item active">Edit Application</span>
        </nav>
        <div class="page-title">
          <h5>
            Sample Application
            <i class="fa fa-edit ml-2"></i>
          </h5>
          <div class="button-group">
            <button type="button" class="btn btn-sm btn-outline-dark">Save</button>
            <button type="button" class="btn btn-sm btn-outline-dark">Cancel</button>
          </div>
        </div>
        <div class="horizontal-rule mt-1"></div>
      </div>

      <div class="create-app">
        <h6>Application Details</h6>
        <div class="row app-details">
          <div class="form-group col-md-5">
            <input
              type="text"
              class="form-control"
              name
              id
              aria-describedby="helpId"
              placeholder="Application Name (e.g KMUS)"
            >
          </div>
          <div class="form-group col-md-5">
            <input
              type="text"
              class="form-control"
              name
              id
              aria-describedby="helpId"
              placeholder="Domain (e.g example.com)"
            >
          </div>
        </div>
        <h6>User Fields</h6>
        <div class="user-fields">
          <div class="row">
            <div class="form-group col-md-3">
              <label for class="font-weight-bold">Name</label>
            </div>
            <div class="form-group col-md-2">
              <label for class="font-weight-bold">Type</label>
            </div>
            <div class="form-group col-md-4">
              <label for class="font-weight-bold">Rules</label>
            </div>
            <div class="form-group col-md-1">
              <label class="form-check-label">Key</label>
            </div>
            <div class="repeater">&nbsp;</div>
          </div>

          <div class="row">
            <div class="form-group col-md-3">
              <input type="text" class="form-control form-control-sm" name id aria-describedby="helpId" placeholder="Full Name">
            </div>
            <div class="form-group col-md-2">
              <select class="custom-select custom-select-sm" name id>
                  <option value="">Type</option>
                <option selected>Text</option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control form-control-sm" name id aria-describedby="helpId" placeholder>
            </div>
            <div class="form-check col-md-1">
              <input type="radio" class="" name id value="checkedValue">
            </div>
            <div class="repeater">
              <button type="button" class="btn btn-sm btn-outline-secondary">&plus;</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">&minus;</button>
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-3">
              <input type="text" class="form-control form-control-sm" name id aria-describedby="helpId" placeholder="Email">
            </div>
            <div class="form-group col-md-2">
              <select class="custom-select custom-select-sm" name id>
                  <option value="">Type</option>
                <option selected>Email</option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control form-control-sm" name id aria-describedby="helpId" placeholder>
            </div>
            <div class="form-check col-md-1">
              <input type="radio" class="" name id value="checkedValue">
            </div>
            <div>
              <button type="button" class="btn btn-sm btn-outline-secondary">&plus;</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">&minus;</button>
            </div>
          </div>

           <div class="row">
            <div class="form-group col-md-3">
              <input type="text" class="form-control form-control-sm" name id aria-describedby="helpId" placeholder="Phone Number">
            </div>
            <div class="form-group col-md-2">
              <select class="custom-select custom-select-sm" name id>
                <option>Type</option>
                <option selected>Phone</option>
                <option></option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control form-control-sm" name id aria-describedby="helpId" placeholder>
            </div>
            <div class="form-check col-md-1">
              <input type="radio" class="" name id value="checkedValue">
            </div>
            <div>
              <button type="button" class="btn btn-sm btn-outline-secondary">&plus;</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">&minus;</button>
            </div>
          </div>

           <div class="row">
            <div class="form-group col-md-3">
              <input type="text" class="form-control form-control-sm" name id aria-describedby="helpId" placeholder="Home Address">
            </div>
            <div class="form-group col-md-2">
              <select class="custom-select custom-select-sm" name id>
                <option>Type</option>
                <option selected>Address</option>
                <option></option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control form-control-sm" name id aria-describedby="helpId" placeholder>
            </div>
            <div class="form-check col-md-1">
              <input type="radio" class="" name id value="checkedValue">
            </div>
            <div>
              <button type="button" class="btn btn-sm btn-outline-secondary">&plus;</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">&minus;</button>
            </div>
          </div>
        </div>
        <h6>Password</h6>
        <div class="password-fields">
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name id value="checkedValue">Must contain
              a symbol
            </label>
          </div>

          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name id value="checkedValue"> Must contain
              a numebr
            </label>
          </div>

          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name id value="checkedValue"> Must contain
              an uppercase letter
            </label>
          </div>

          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name id value="checkedValue"> Pin mode
            </label>
          </div>
        </div>

        <div class="horizontal-rule mt-4"></div>

        <h6 class="float-right mt-3">&copy; Copyrights Edeco Internet Gbmh</h6>
      </div>
    </div>
  </div>
</template>

<script src="./edit-application.js"></script>
<style scoped>
@import url(./edit-application.css);
</style>
