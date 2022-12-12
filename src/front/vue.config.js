const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      port: '80',
      // https://github.com/vuejs-templates/webpack/issues/378
    }
  },
  pages: {
    'login': { 
      entry: './src/pages/Login/main.js',
      temlate: 'public/login.html',
      filename: "login.html",
      title:'Login',
      temlate: 'public/login.html',
      chunks: ['chunk-vedors','chunk-common','login']
    },
    'index': {
      entry: './src/pages/Home/main.js',
      temlate: 'public/index.html',
      title:'Home',
      filename: 'index.html',
      entry: './src/pages/Home/main.js',
      temlate: 'public/login.html',
      chunks: ['chunk-vedors','chunk-common','index']
    }
  }
})