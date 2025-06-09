<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ControllerTabs from './components/ControllerTabs.vue'
</script>

<template>
  <!-- <RouterView /> -->
  <ControllerTabs></ControllerTabs>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  width: 100dvw;
  height: 100dvh;
}

#app {
  font-family: 'Roboto', sans-serif;
  width: 100dvw;
  height: 100dvh;
  font-weight: 700;
}
</style>
