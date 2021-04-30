module.exports = {
  publicPath: '/vue_mixing',
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
    externals: {
      vue: 'Vue',
      CtsjMicroFrontends: 'CtsjMicroFrontends',
    },
  },
};
