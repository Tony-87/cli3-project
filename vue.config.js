
module.exports = {
    publicPath: './',
    filenameHashing: true,
    configureWebpack: {
      devServer: {
        disableHostCheck: true,
      }
    },
    chainWebpack: config => {
      config.plugin('html').tap(args => {
        args[0].minify = false
        return args
      })
    },
   
  }
  