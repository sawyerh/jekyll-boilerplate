var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    global:  './src/scripts/global.coffee',
    item:    './src/scripts/item.coffee',
    vanilla: './src/scripts/vanilla.js'
  },
  output: {
    path: './dist/scripts',
    // Take each entry above and create a file named based on its key:
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        // Compiles .coffee to .js files:
        test: /\.coffee$/,
        loader: 'coffee',
        exclude: /(node_modules|bower_components)/
      },
      {
        // Compiles .coffee mixed w/ React to .js files:
        test: /\.cjsx$/,
        loaders: ['coffee', 'cjsx'],
        exclude: /(node_modules|bower_components)/
      },
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
    // use the main field from the bower.json file
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    // Minify our build output:
    new webpack.optimize.UglifyJsPlugin(),
    // Define proces.env.NODE_ENV so React strips debugging info from production build:
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"' + process.env.NODE_ENV + '"'
      }
    })
  ],
  resolve: {
    // Search in bower_components and src/styles too:
    root: [path.join(__dirname, "bower_components"), path.join(__dirname, "src/styles")],
    // Add .coffee to the list of extensions that should be used to resolve modules:
    extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"]
  }
};