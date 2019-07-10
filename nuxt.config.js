const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  head: {
    title: 'SMART COLLEGE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'iconfont/material-icons.css' },
    ],
  },
  mode: 'spa',
  modern: 'client',
  router: {
    mode: 'hash',
  },

  build: {
    plugins: [
      new VuetifyLoaderPlugin(),
    ],
  },

  plugins: [
    '~/plugins/vuetify',
  ],
}
