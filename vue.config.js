module.exports = {
  // 避免Eslint报错
  lintOnSave: false,
  devServer:{
    // overlay:{
    //   warnings:false,
    //   errors:false
    // },
    proxy:{
      "/api":{
        target:"http://127.0.0.1:3000/",
        changeOrigin:true,
        ws:true,
        secure:false,
        pathRewrite:{
          "^/api":""
        }
      }
    }
  },
}