const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // -----add for running in tomcat
  // publicPath: '././',

  // -----add for running in tomcat

  devServer:{
    port: 7000
  }
})
