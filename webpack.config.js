const path = require("path");
const babelConfig = require("./babel/babel.config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    index: `./src/index.js`
  },
  output: {
    path: path.resolve(__dirname, `./dist`),
    filename: "[name].js",
    libraryTarget: "commonjs"
  },
  target: "node",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        options: babelConfig()
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false
        }
      })
    ]
  }
};
