module.exports = {
  // cache: true,
  cache: {
    max: 1000,
    maxAge: 900000
  },
  build: {
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: [
      'axios',
      'particles.js',
      'swiper',
      'marked',
      'highlight.js'
    ],
    // postcss
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')()
    ],
    // babel
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ]
    }
  },
  dev: (process.env.NODE_ENV !== 'production'),
  /*
  ** Headers of the page
  */
  head: {
    title: '陈亚',
    titleTemplate: '%s | 陈亚',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'blog' },
      { hid: 'keywords', name: 'keywords', content: '陈亚的博客' },
      { name: 'author', content: '1123236324@qq.com' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ]
  },
  // router
  router: {
    middleware: ['layout'],
    linkActiveClass: 'link-active'
    // scrollBehavior: (to, from, savedPosition) => {
    //   return { x: 0, y: 0 }
    // }
    // scrollBehavior (to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
  },
  // plugins
  plugins: [
    { src: '~plugins/swiper.js', ssr: false },
    { src: '~plugins/clickOutside.js', ssr: false },
    { src: '~plugins/filter.js' },
    { src: '~plugins/finally.js' },
    { src: '~plugins/marked.js' }
  ],
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css',
    { src: '~assets/scss/index.scss', lang: 'scss' },
    'highlight.js/styles/atom-one-dark.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#24292e' }
}
