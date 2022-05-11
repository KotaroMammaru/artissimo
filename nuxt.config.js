export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'artissimo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap", rel:"stylesheet"},

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify', 
  ],
  vuetify: {
    treeShake: true,
    thema: {
      dark: true,
      
    }

  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-fontawesome'],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faHouse', 'faHeart', 'faCog', 'faMagnifyingGlass'],//['fas']だと全て読み込んでしまう
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
