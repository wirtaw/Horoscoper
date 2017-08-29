var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./app/js/app.js",
    html: "./app/index.html",
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "./dist/",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
      rules: [
        {
            test: /\.html$/,
            use: [ {
              loader: 'html-loader',
              options: {
                minimize: false
              }
            }],
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',	
            query: {
                presets: ['es2015', 'react']
            }
        }
      
      ]
  },
    plugins: [HTMLWebpackPluginConfig]
};