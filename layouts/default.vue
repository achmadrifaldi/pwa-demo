<template>
  <div id="layout-default" class="bg-gray-300">
    <Navbar />
    <nuxt />
    <Footer />
    <BottomNavigation />

    <client-only>
      <offline-alert />
    </client-only>
  </div>
</template>

<script>
import BottomNavigation from '~/components/base/BottomNavigation.vue'
import Footer from '~/components/base/Footer'
import Navbar from '~/components/base/Navbar'

export default {
  components: {
    BottomNavigation,
    Footer,
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

.offline-alert {
  top: 4rem !important;
}
</style>
