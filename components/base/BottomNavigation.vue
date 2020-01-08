<template>
  <div
    id="base-bottom-navigation"
    class="md:hidden bg-white fixed z-40 inset-x-0 bottom-0 shadow-sm pb-1"
  >
    <div class="flex relative justify-center">
      <div
        class="absolute inset-0 rounded-full m-auto py-2 px-2 rounded-middle bg-white"
      >
        <div class="relative">
          <nuxt-link
            to="/scanner"
            class="absolute m-auto m-auto w-12 h-12 flex items-center justify-center rounded-full text-center button-shadow"
          >
            <span class="material-icons text-3xl text-white">center_focus_strong</span>
          </nuxt-link>
        </div>
      </div>

      <div class="w-1/2">
        <router-link
          to="/"
          class="block text-center text-gray-600 pt-2"
          exact
        >
          <span class="material-icons text-3xl">home</span>
          <span class="block text-xs">BERANDA</span>
        </router-link>
      </div>
      <div class="w-1/2">
        <router-link
          to="/help"
          class="block text-center text-gray-600 pt-2"
          exact
        >
          <span class="material-icons text-3xl">help_outline</span>
          <span class="block text-xs">BANTUAN</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation'
}
</script>

<style lang="scss" scoped>
$primary-color: #c62828;

.rounded-middle {
  box-shadow: 0px -10px 7px -6px rgba(229, 229, 229, 0.5);
  width: 64px;
  height: 45px;
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px;
  margin-top: -24px;
}

.rounded-middle a {
  background-color: $primary-color; 
}

.button-shadow {
  box-shadow: 0px 0px 15px 3px rgba(19, 70, 253, 0.3);
}
</style>
