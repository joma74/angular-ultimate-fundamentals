const helpers = require("./helpers")
const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * Current Project Dir
 */
const cpd = path.join(__dirname, "../")

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
          fallback: "style-loader",
          use: "css-loader?sourceMap",
        }),
      },
      {
        test: /\.css$/,
        include: helpers.root("src", "app"),
        use: "raw-loader",
      },
    ],
  },
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
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules", cpd],
  },
}

module.exports = webpackConfig