module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  },
  transpileDependencies: [
    '@coreui/utils',
    '@coreui/vue'
  ],
  runtimeCompiler: true
};
