module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
      CtsjMicroFrontends: 'CtsjMicroFrontends',
    };
  },
};
