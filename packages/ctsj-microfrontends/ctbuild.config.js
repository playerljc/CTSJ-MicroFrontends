module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
      vue: 'Vue',
    };
    // webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
