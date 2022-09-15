const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath:'./',
  devServer:{
    proxy:'http://127.0.0.1:5005'  //http://yeyeye.cc:5002 
  }
})
