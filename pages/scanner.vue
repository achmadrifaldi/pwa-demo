<template>
  <div id="scanner-page" class="relative">
    <nuxt-link
      to="/"
      class="absolute z-10 h-10 w-10 flex items-center justify-center rounded-full bg-primary"
    >
      <span class="material-icons text-3xl text-white"
        >keyboard_arrow_left</span
      >
    </nuxt-link>
    <client-only>
      <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
      ></StreamBarcodeReader>
    </client-only>
  </div>
</template>

<script>
export default {
  methods: {
    onDecode(result) {
      console.log(result)
    },

    onLoaded(result) {
      console.log(result)
    }
  }
}
</script>

<style>
.scanner-container {
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

.scanner-container .overlay-element,
.scanner-container .laser {
  display: none;
}

.scanner-container video {
  min-width: 100%;
}
</style>
