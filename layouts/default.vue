<template>
  <div id="layout-default" class="bg-gray-300">
    <Navbar />
    <nuxt />
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from '~/components/base/BottomNavigation.vue'
import Navbar from "~/components/base/Navbar"

export default {
  components: {
    BottomNavigation,
    Navbar
  }  
}
</script>

<style>
html {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>