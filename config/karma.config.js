require("karma-jasmine-html-reporter")

var webpackConfig = require("./webpack.test.config")

/**
 * @param  {import ("karma").Config} config
 */
module.exports = function(config) {
	/**
	 * @type  {import ("karma").ConfigOptions}
	 */
	var _config = {
		autoWatch: false,
		basePath: "",
		browsers: ["Chrome"],
		colors: true,

		frameworks: ["jasmine"],

		failOnEmptyTestSuite: false,

		files: [
			{ pattern: "./config/karma.testloader.webpack.js", watched: false },
		],

		logLevel: config.LOG_INFO,
		mime: { "text/x-typescript": ["ts", "tsx"] },

		preprocessors: {
			"./config/karma.testloader.webpack.js": ["webpack", "sourcemap"],
		},

		// @ts-ignore
		webpack: webpackConfig,

		webpackMiddleware: {
			stats: "errors-only",
		},

		/**
		 * @type {import("webpack-dev-server").Configuration}
		 */
		// @ts-ignore
		webpackServer: {
			noInfo: true,
		},

		port: 9876,
		reporters: ["progress", "kjhtml"],
		singleRun: true,
	}

	config.set(_config)
}
