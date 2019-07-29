const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  stats: {
    colors: true,
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
    contentBase: './dist',
  },
  devtool: 'source-map',
});
