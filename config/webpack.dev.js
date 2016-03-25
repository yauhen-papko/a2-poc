const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base');

// plugins
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = webpack.DefinePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;

// server address
const SERVER_HOST = 'localhost';
const SERVER_PORT = '3000';


module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map', // for faster builds use 'cheap-module-eval-source-map'
  output: config.output,
  resolve: config.resolve,
  
  entry: {
    app: config.entry.app,
    vendor: config.entry.vendor
  },

  module: {
    preLoaders: [
       { test: /\.ts$/, loader: 'tslint-loader', include: [ path.resolve(__dirname, '../src/app') ] }
    ],
      
    loaders: [
      { test: /\.html$/, loader: 'raw'},
      { test: /\.ts$/, include: [path.resolve(__dirname, "../src/app")], loader: 'ts-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ],

    noParse: config.module.noParse
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    }),
    new OccurenceOrderPlugin(),
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
    new CopyWebpackPlugin(config.assets),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './src/app/index.html'
    })
  ],

  devServer: {
    contentBase: './src/app',
    historyApiFallback: true,
    host: SERVER_HOST,
    inline: true,
    port: SERVER_PORT,
    publicPath: config.output.publicPath,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    }
  }
};