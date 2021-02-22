module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
      config.output.filename("myapp.js");
      //config.output.filename("myapp.css");
      config.optimization.splitChunks( ).clear();
  },
  transpileDependencies: [
    '@coreui/utils',
    '@coreui/vue'
  ],
  runtimeCompiler: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
};
