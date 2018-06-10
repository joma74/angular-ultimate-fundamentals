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
    basePath: "",

    frameworks: ["jasmine"],

    files: [
      { pattern: "./config/karma.testloader.webpack.js", watched: false },
    ],

    preprocessors: {
      "./config/karma.testloader.webpack.js": ["webpack", "sourcemap"],
    },

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

    mime: { "text/x-typescript": ["ts", "tsx"] },

    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["Chrome"],
    singleRun: true,
    failOnEmptyTestSuite: false,
  }

  config.set(_config)
}
