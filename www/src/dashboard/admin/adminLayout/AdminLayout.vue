<template>
    <div>
        <div class="page-container" :class=" { sbar_collapsed : toggle }">
            <adminSidebar/>
            <div class="main-content">
                <adminHeader :toggleSideBar="sideBarToggled"/>
                <router-view></router-view>
                <adminFooter/>
            </div>
        </div>
    </div>
</template>


<script src="./adminLayout.js"></script>
<style scoped>@import url(./adminLayout.css);</style>
