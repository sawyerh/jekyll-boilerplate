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
  resolve: {
    // Add bower_components to the list of directories to be searched for modules:
    modulesDirectories: ["web_modules", "node_modules", "bower_components", "src/styles"],
    // Add .coffee to the list of extensions that should be used to resolve modules:
    extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"]
  }
};