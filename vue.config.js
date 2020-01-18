module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      disableHostCheck: true,
      sockPort: 8503,
      sockHost: "localhost",
      https: true,
      port: 8503
    },
    externals: ["vue", "vue-router", /^@vue-mf\/.+/]
  },
  filenameHashing: false
};
