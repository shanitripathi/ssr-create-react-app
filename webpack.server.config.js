const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const webpackNodeExternals = require("webpack-node-externals");

const server_config = {
  // tell webpack to run this on server
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname),
  },
  //   tell webpack to convert the new js code to old one
  externals: [webpackNodeExternals()],
};

module.exports = merge(config, server_config);
