'use strict'

module.exports = {
  devServer: {
    port:8081,
    proxy: { // proxyTable 설정
      '/test': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
           '^/test': '/users'
        }
      }
    }
  }
}



