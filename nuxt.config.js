
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' },
      { rel: 'apple-touch-icon', href: 'icon-152x152.png' },
      { href: "/splashscreens/ios/iphone5_splash.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/iphone6_splash.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/iphoneplus_splash.png", media: "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/iphonex_splash.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/iphonexr_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/iphonexsmax_splash.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/ipad_splash.png", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/ipadpro1_splash.png", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/ipadpro3_splash.png", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "/splashscreens/ios/ipadpro2_splash.png", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel', mode: 'client' },
    { src: '~plugins/vue-barcode-reader.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  pwa: {
    meta: {
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      mobileAppIOS: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
