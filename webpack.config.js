const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './main.js'
  ],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']}
    ]
  },

  resolve: {
      extensions: ['.js']
  },

  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
  },

  devServer: {
      contentBase: './dist',
      hot: true
  },

  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ]

};
