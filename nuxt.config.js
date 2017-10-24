module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Last Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    './static/less/index.less',
    'element-ui/lib/theme-default/index.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~plugins/element-ui'
  ],
  build: {
    analyze: false,
    vendor: ['element-ui']
  },
}
