const commonConfig = require("./webpack.common.config")
const helpers = require("./helpers")
const jsonServer = require("json-server")
const path = require("path")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const { CheckerPlugin } = require("awesome-typescript-loader")
const extractTextPlugin = require("extract-text-webpack-plugin")

/**
 * Current Project Dir
 */
const cpd = path.join(__dirname, "../")
const contentNotFromWebpackIsServedFrom = path.join(__dirname, "../src/")
const publicPath = "/"

/**
 * @type {import("webpack-dev-server").Configuration}
 */
const devServer = {
	before(app) {
		// @ts-ignore
		app.use("/api", jsonServer.router(cpd + "/db.json"))
	},
	compress: true,
	contentBase: contentNotFromWebpackIsServedFrom,
	historyApiFallback: true,
	host: "0.0.0.0",
	hot: true,
	port: 4000,
	stats: "minimal",
	watchContentBase: false,
}
/**
 * @type {import ("webpack").Configuration}
 */
const devConfig = {
	devServer,
	devtool: "cheap-module-eval-source-map",
	output: {
		chunkFilename: "[id].chunk.js",
		filename: "[name].js",
		path: helpers.root("dist"),
		publicPath,
	},
	plugins: [
		new CheckerPlugin(),

		new extractTextPlugin("[name].css"),

		new webpack.HotModuleReplacementPlugin(),
	],
}

module.exports = webpackMerge(commonConfig, devConfig)
