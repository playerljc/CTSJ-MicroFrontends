module.exports = {
  publicPath: '/vue_system/vue_statistics/',
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
