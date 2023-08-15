<template>
	<div id="app">
		<HeaderComponent />
		<div class="main-content">
			<div class="main-layout-content">
				<div class="content">
					<router-view class="container" style="overflow-x: auto" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import HeaderComponent from './components/layout/HeaderComponent.vue';

export default {
	name: 'App',
	components: {
		HeaderComponent,
	},

	created() {
		fetch("https://api.dotabackend.com/auth/steam/success", { credentials: "include" })
			.then((res) => res.json())
			.then((res) => {
				if (res.success) {
					console.log("User is logged in");
					console.log(res.user.steamID);
					console.log(res.user.username);
					console.log(res.user.picture);

					this.$store.commit({
						type: "SET_USER",
						steamID: res.user.steamID,
						username: res.user.username,
						picture: res.user.picture,
					});
				} else {
					console.log("User is not logged in");
					this.$store.commit({
						type: "LOG_OUT",
					});
				}
			})
			.catch((err) => {
				console.log(err);
				this.$store.commit({
					type: "LOG_OUT",
				});
			});
	}
};
</script>