const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './main.ts',
    vendor: './vendor.ts' 
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular\/core\/(esm\/src|src)\/linker/, __dirname
    ),
    new CheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
    }),
    new HTMLWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'to-string-loader!css-loader',
        exclude: /node_modules/
      }
    ]
  }
};