const path = require("path");

const config = {
  mode: process.env.NODE_ENV || "development",
  context: __dirname,
  entry: ["./assets/src/scripts/app.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "assets/dist/scripts/app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "assets/src/scripts")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;
