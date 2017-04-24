const path = require('path');
const webpack = require('webpack');

let config = {
  context: __dirname,
  entry: ['./assets/src/scripts/app.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'assets/dist/scripts/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'],
        include: [path.resolve(__dirname, 'assets/src/scripts')]
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_console: true,
      warnings: false
    }
  });

  config.plugins = [uglifyPlugin];
}

module.exports = config;
