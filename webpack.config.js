module.exports = {
  entry: {
    global: './src/global.coffee',
    item: './src/item.coffee'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/, loader: 'coffee-loader'
      }
    ]
  }
};