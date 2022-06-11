const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      port: '80',
      // https://github.com/vuejs-templates/webpack/issues/378

    }
  }
})
