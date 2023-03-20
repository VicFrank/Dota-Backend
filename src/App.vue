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
    fetch("https://api.dotabackend.com/api/auth/steam/success", { credentials: "include" })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const { photos, id, displayName } = res.user;

          this.$store.commit({
            type: "SET_USER",
            steamID: id,
            username: displayName,
            picture: photos[2].value,
          });
        } else {
          this.$store.commit({
            type: "LOG_OUT",
          });
        }
      });
  }
};
</script>