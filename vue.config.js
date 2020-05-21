module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/COVID-19-dashboard/'
    : '/',
  lintOnSave: false
}
