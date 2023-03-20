<template>
  <a href="https://api.dotabackend.com/auth/steam/login" class="btn btn-primary">
    <img src="../../assets/images/site/steam_icon.png" class="steam-icon mr-1" alt="Steam Login Button" />
    Sign In
  </a>
</template>

<script lang="ts">
export default {
  name: "LoginButton",
};
</script>

<style scoped>
.steam-icon {
  height: 1rem;
  width: 1rem;
}
</style>
