<template>
  <div class="container">
    <div class="col-md-4 offset-md-4 auth">
      <form action id="login-form" class="auth-form">
        <div class="form-group">
          <input
            type="password"
            name
            id
            class="form-control"
            placeholder="New Password"
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            name
            id
            class="form-control"
            placeholder="Confirm Password"
          >
        </div>
        <div class="btn-group btn-block" role="group" aria-label="Basic example">
          <button type="submit" class="btn btn-yellow">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

