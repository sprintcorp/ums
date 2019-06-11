<template>
	<div class="google">
		<GoogleLogin  
				:params="googleLoginParams"
				:onSuccess="googleSuccess"
				:onFailure="googleFailure"
				v-if="!googleConnected"
				class="btn btn-danger btn-sm">
			<i class="ti ti-google"></i> &nbsp; Google
		</GoogleLogin>

		<GoogleLogin
				:params="googleLoginParams"
				:logoutButton=true
				v-if="googleConnected"
				class="btn btn-danger btn-sm">
			<i class="ti ti-google"></i> &nbsp; Google
		</GoogleLogin>
	</div>
</template>

<script src="./google.js"></script>
<style scoped>@import url("./google.css");</style>
