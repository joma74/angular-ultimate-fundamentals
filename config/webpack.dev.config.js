const commonConfig = require("./webpack.common.config")
const helpers = require("./helpers")
const jsonServer = require("json-server")
const path = require("path")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

/**
 * Current Project Dir
 */
const cpd = path.join(__dirname, "../")

/**
 * @type {import("webpack-dev-server").Configuration}
 */
const devServer = {
  before(app) {
    app.use("/api", jsonServer.router(cpd + "/db.json"))
  },
  contentBase: cpd,
  compress: true,
  historyApiFallback: true,
  host: "0.0.0.0",
  hot: true,
  port: 4000,
  stats: "minimal",
  publicPath: "build",
  watchContentBase: false,
}

module.exports = webpackMerge(commonConfig, {
  devtool: "cheap-module-eval-source-map",
  devServer,
  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),

    new webpack.HotModuleReplacementPlugin(),
  ],
})
