<template>
    <div class="facebook">
        <facebook-login
                class="button"
                appId="1309512105852123"
                @login="fbLogin"
                @logout="fbLogout"
                @sdk-loaded="fbSdkLoaded"
                :class="{'container': false}"
                :login-label="label"
                :logout-label="label">
        </facebook-login>
    </div>
</template>

<script src="./facebook.js"></script>
<style>@import url("./facebook.css");</style>