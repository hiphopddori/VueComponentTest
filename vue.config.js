'use strict'

module.exports = {
  devServer: {
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



