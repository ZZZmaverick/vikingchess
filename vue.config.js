module.exports = {
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      "/api": {
        target: "http://localhost:3000", //代理接口
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "" //代理的路径
          //  '^/api': '/public/data'    //代理的路径
        }
      }
    }
  }
};
