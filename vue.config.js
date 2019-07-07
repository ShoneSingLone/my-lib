module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' /* demo */ : '/',
  css: {
    extract: false // inline-css
  },
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}