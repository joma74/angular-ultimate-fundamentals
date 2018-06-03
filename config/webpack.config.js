const path = require("path")
const webpack = require("webpack")
/**
 * @type {any}
 */
const jsonServer = require("json-server")

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

/**
 * @type {import ("webpack").Node}
 */
const node = {
  fs: "empty",
  global: true,
  crypto: "empty",
}

/**
 * @type {import ("webpack").Configuration}
 */
const webpackConfig = {
  devServer,
  devtool: "source-map",
  node,
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules", cpd],
  },
}

module.exports = webpackConfig
