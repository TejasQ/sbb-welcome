const { resolve } = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const WEBPACK_PUBLIC_PATH = process.env.WEBPACK_PUBLIC_PATH || "/"
const NODE_ENV = process.env.NODE_ENV || "dev"

module.exports = {
  entry: ["regenerator-runtime/runtime", resolve(__dirname, "../src/index.jsx")],
  output: {
    publicPath: process.env.WEBPACK_PUBLIC_PATH || "/",
    path: resolve(__dirname, "..", "dist"),
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "..", "public", "index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV),
        WEBPACK_PUBLIC_PATH: JSON.stringify(WEBPACK_PUBLIC_PATH),
      },
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      components: resolve(__dirname, "../src/components"),
      utils: resolve(__dirname, "../src/utils"),
    },
  },
}
