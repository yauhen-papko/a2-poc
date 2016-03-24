const path = require('path');


module.exports = {
  assets: [
    {from: 'src/assets/vendor.css'},
    {from: 'src/assets/images', to: 'images'}
  ],

  entry: {
    app: './src/app/boot',
    vendor: './src/app/vendor'
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./src')
  },

  module: {
    noParse: [
      /angular2\/bundles\/.+/
    ]
  }
};