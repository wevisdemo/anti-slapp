const BASE_URL = 'https://wevis.info/anti-slapp/'
// const array = [];
// for (var i = 0; i < 51; i++) {
//   for (var j = 0; j < 51; j++) {
//     array.push("/ogimage/" + i + "-" + j);
//   }
// }

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ยุติธรรมทำลาย',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'เมื่อกฎหมาย คุกคาม ประชาชน' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },

      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: BASE_URL
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://wevis.info/wp-content/uploads/2022/01/favicon.png' },
      { rel: 'stylesheet', href: 'https://design-systems.wevis.info/typography.css' },
    ]
  },

  // generate: {
  //   dir: 'dist/booksonshelf',
  // },
  router: {
    base: '/anti-slapp/',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    '@wevisdemo/ui/styles/typography.css',
    '@wevisdemo/ui/styles/components.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
    { src: './plugins/vue-dragscroll.js', mode: 'client' },
    { src: '~/plugins/index.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
    '@nuxtjs/axios',
  ],

  fontawesome: {
    icons: {
      solid: ['faStar', 'faChevronDown', 'faArrowDown', 'faArrowRight', 'faBars', 'faCaretRight', 'faCaretLeft']
    }
  },

  //loading: '~/components/Loading.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'vue-plausible',
    'bootstrap-vue/nuxt',
  ],
  styleResources: {
    scss: ['~/assets/styles/variables.scss'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  plausible: {
    domain: 'wevis.info/anti-slapp',
    apiHost: 'https://analytics.punchup.world',
  },
  env: {
    NOCO_TOKEN: process.env.NOCO_TOKEN
  }
}
