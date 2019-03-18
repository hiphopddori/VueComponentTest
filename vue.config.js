'use strict'

module.exports = {
  devServer: {
    proxy: { // proxyTable 설정
      '/user': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
           // '^/test': '/users'
        }
      }
    }
  }
}



