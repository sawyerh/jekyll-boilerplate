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
        // Enable ES6 features in .js files (Won't work for CoffeeScript due to its reserved words list)
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        // React
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        // Enable require() for .scss files (inlines in <head>...not sure how I feel about this yet):
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /(node_modules|bower_components)/
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
    // Search in bower_components and src/styles too:
    root: [path.join(__dirname, "src/styles")],
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