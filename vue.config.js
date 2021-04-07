'use strict'; //严格模式
const path = require('path');
function resolve(params) {
  return path.join(__dirname,params)
}
module.exports = {
  //例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/play/',
  //打包目录
  outputDir: './public',
  //静态资源
  assetsDir: 'assets',
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,
  // 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  lintOnSave: true,
  //sourceMap
  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,
  // 它支持webPack-dev-server的所有选项
  devServer: {
    // port: 8099,
    open: false,
    https: false,
    proxy: {
      '/play': {
        'target': 'http://10.10.1.3',
        'changeOrigin': true,
        'pathRewrite': {
          '^play/': '/'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    externals: {
      'echarts': 'echarts' // 打包不打入echarts，通过cdn加速引入
    },
  },

}