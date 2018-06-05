const path = require("path")
const webpack = require("webpack")
const jsonServer = require("json-server")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const helpers = require("./helpers")

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
  entry: {
    polyfills: "./src/polyfills.ts",
    vendor: "src/vendor.ts",
    app: "src/main.ts",
  },
  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
  },
  devServer,
  devtool: "source-map",
  node,
  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root("./src"), // location of your src
      {}, // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      names: ["app", "vendor", "polyfills"],
    }),

    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules", cpd],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: { configFileName: helpers.root("tsconfig.json") },
          },
          "angular2-template-loader",
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: "file-loader?name=assets/[name].[hash].[ext]",
      },
      {
        test: /\.css$/,
        exclude: helpers.root("src", "app"),
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader?sourceMap",
        }),
      },
      {
        test: /\.css$/,
        include: helpers.root("src", "app"),
        use: "raw-loader",
      },
    ],
  },
}

module.exports = webpackConfig
