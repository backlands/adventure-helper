const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/client'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:  "babel-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
          },
        }
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: {
    colors: true,
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
