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
};
</script>