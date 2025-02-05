module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: ["vue", "vue-router", /^@vue-mf\/.+/]
  },
  filenameHashing: false
};
