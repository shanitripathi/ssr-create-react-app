const path = require("path");

const { merge } = require("webpack-merge");
const config = require("./webpack.config");
client_config = {
  // tell webpack to run this on server

  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  //   tell webpack to convert the new js code to old one
};

module.exports = merge(config, client_config);
