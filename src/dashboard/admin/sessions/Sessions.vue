<template>
    <div>
        <!-- page title area start -->
        <div class="page-title-area">
            <div class="row align-items-center">
                <div class="col-sm-6 spaced">
                    <div class="breadcrumbs-area clearfix">
                        <h4 class="page-title pull-left">Sessions</h4>
                        <ul class="breadcrumbs pull-left">
                            <li>
                                <router-link :to="{name:'adminDashboard'}" tag="a">Home</router-link>
                            </li>
                            <li>
                                <span>&nbsp;Sessions</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- page title area end -->
        <div class="main-content-inner container-fluid pt-4 pb-4">
            <div class="row">
                <div class="col-3 pr-0 app-box">
                    <div class="card">
                        <div class="card-body app-box-header">
                            <h5 class="card-title">Applications</h5>
                            <p class="card-text" v-if="apps.length > 0"><small>Click an application to view sessions.</small></p>
                            <div class="search-holder mt-2">
                                <input type="text" class="form-control form-control-sm" placeholder="Search..." />
                            </div>
                        </div>
                        <ul class="list-group list-group-flush" v-if="apps.length > 0">
                            <li class="list-group-item"
                                v-for="app in apps"
                                :class="{active: activeApp == app.name}"
                                :key="app.id"
                                @click="activeApp = app.name">
                                {{ app.name }}
                            </li>
                        </ul>
                        <div class="card-body" v-else>
                            <em>
                                Your haven't created any application.
                            </em>
                        </div>
                        <div class="card-body">
                            <a href="#" @click="loadMoreApps" class="card-link" v-if="apps.length > 0">Load more...</a>
                            <a @click="" href="#" v-else>Create a new application.</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="page-title clean" v-if="activeApp != null">{{ activeApp }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./session.js"></script>
<style scoped>@import url(./session.css);</style>