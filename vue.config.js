const WebpackShellPlugin = require('webpack-shell-plugin')
let publicPath = "/"
let configureWebpackPlugins = [];

if (process.env.NODE_ENV === 'production') {
  // build之后复制到服务器部署目录，需要配置相应脚本
  configureWebpackPlugins.push(new WebpackShellPlugin({
    onBuildExit: [`node ./configs/copydir`]
  }));
  /*  */
  publicPath = '/my-lib';
}

module.exports = {
  runtimeCompiler: true,
  publicPath,
  css: {
    extract: false // inline-css
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: configureWebpackPlugins,
    output: {
      libraryExport: 'default'
    }
  }
}