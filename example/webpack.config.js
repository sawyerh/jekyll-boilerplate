var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    global: './src/scripts/global.coffee',
    item: './src/scripts/item.coffee'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        // Compiles .coffee to .js files:
        test: /\.coffee$/, loader: 'coffee-loader'
      },
      {
        // Enable require() for .scss files (inlines in <head>...not sure how I feel about this yet):
        test: /\.scss$/, loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    // use the main field from the bower.json file
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ],
  resolve: {
    // Search in bower_components too:
    root: [path.join(__dirname, "bower_components"), path.join(__dirname, "src/styles")],
    // Add .coffee to the list of extensions that should be used to resolve modules:
    extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"]
  }
};