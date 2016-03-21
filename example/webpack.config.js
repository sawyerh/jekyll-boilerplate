var path = require("path");
var webpack = require("webpack");
var config = {
  entry: {
    example: './src/scripts/example.js'
  },
  output: {
    path: './dist/scripts',
    // Take each entry above and create a file named based on its key:
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        // React
        test: /\.(jsx|js)?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    // Define proces.env.NODE_ENV so React strips debugging info from production build:
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"' + process.env.NODE_ENV + '"'
      }
    })
  ],
  resolve: {
    // Add .jsx to the list of extensions that should be used to resolve modules:
    extensions: ["", ".js", ".jsx"]
  }
};

if(process.env.NODE_ENV === 'production'){
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }));
}

module.exports = config;