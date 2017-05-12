var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: __dirname,

  entry: "./src/main",

  output: {
    path: path.resolve("./src/public/bundle/"),
    filename: "main.bundle.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: "/node_modules/", loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
}
