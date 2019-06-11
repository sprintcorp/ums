<template>
    <div>
        <div class="page-container" :class=" { sbar_collapsed : toggle }">
            <superAdminSidebar/>
            <div class="main-content">
                <superAdminHeader :toggleSideBar="sideBarToggled"/>
                <router-view></router-view>
                <superAdminFooter/>
            </div>
        </div>
    </div>
</template>

<script src="./superAdminLayout.js"></script>
<style scoped>@import url(./superAdminLayout.css);</style>
