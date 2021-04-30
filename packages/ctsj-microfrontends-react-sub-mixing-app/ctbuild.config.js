module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
      react: 'React',
      'react-dom': 'ReactDOM',
      antd: 'antd',
      CtsjMicroFrontends: 'CtsjMicroFrontends',
    };

    webpackConfig.module.rules[1].include.push(/antd.min.css/);
  },
};
