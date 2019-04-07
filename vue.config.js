'use strict'

module.exports = {
  devServer: {
    
    proxy: { // proxyTable 설정
      '/org': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        pathRewrite: {
           // '^/test': '/users'
        }
      }
      ,
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        pathRewrite: {
           // '^/test': '/users'
        }
      }    
    }
  }
  /*
  ,
    baseUrl: '',
    outputDir: '../main/resources/',
    assetsDir: '../main/assets/',
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                return options
            })
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|ico)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                name: path.join('../main/assets/', 'img/[name].[ext]')
            })
    }
    */
}



