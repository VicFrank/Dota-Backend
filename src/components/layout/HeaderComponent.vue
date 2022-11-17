<template>
  <header>
    <div class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand">
        Dota Backend
      </router-link>
      <ul class="navbar-nav flex-row d-flex text-uppercase">
        <li class="nav-item">
          <router-link to="/my_projects" class="nav-link" exact-active-class="active-link">
            My Projects
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tutorial" class="nav-link" exact-active-class="active-link">
            Tutorial
          </router-link>
        </li>
      </ul>
      <div class="ml-auto" v-if="!loggedIn">
        <LoginButton />
      </div>
      <div class="ml-auto" v-if="loggedIn">
        <a href="https://api.dotabackend.com/api/auth/logout" class="btn" variant="outline-primary">Sign Out</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import LoginButton from "@/components/auth/LoginButton.vue";

export default {
  name: "HeaderComponent",
  components: {
    LoginButton,
  },
  computed: {
    loggedIn() {
      return false;
      // return this.$store.getters.loggedIn;
    },
  },
};
</script>