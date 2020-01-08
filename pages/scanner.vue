<template>
  <div id="scanner-page" class="relative h-screen">
    <div class="absolute z-10 inset-0">
      <nuxt-link
        to="/"
        class="h-10 w-10 m-2 flex items-center justify-center rounded-full bg-primary"
      >
        <span class="material-icons text-3xl text-white"
          >keyboard_arrow_left</span
        >
      </nuxt-link>
      <p class="block text-center text-white">
        Pindai QR atau Barcode
      </p>
    </div>

    <p class="fixed z-20 bottom-0 inset-x-0 p-4 text-center text-white">
      {{ result }}
    </p>

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
  layout: 'blank',

  data: () => ({
    result: null
  }),

  methods: {
    onDecode(result) {
      this.result = result
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

.scanner-container .overlay-element {
  height: 100%;
}

.scanner-container video {
  height: 100vh;
  width: 100%;
  object-fit: contain;
}
</style>
