var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './main.js'
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: { presets: ['es2015', 'react'] }
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader']
    }]
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
