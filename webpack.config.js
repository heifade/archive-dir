const path = require("path");
const babelConfig = require("./babel/babel.config");

module.exports = {
  entry: {
    index: `./src/index.js`,
  },
  output: {
    path: path.resolve(__dirname, `./dist`),
    filename: "[name].js",
    libraryTarget: "commonjs",
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
  }
};
