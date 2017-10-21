const CopyWebpackPlugin = require("copy-webpack-plugin")
const baseConfig = require("./webpack.base")
const { resolve } = require("path")
const webpack = require("webpack")

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, "..", "public", "img"),
        to: resolve(__dirname, "..", "dist", "img"),
      },
      {
        from: resolve(__dirname, "..", "public", "fonts"),
        to: resolve(__dirname, "..", "dist", "fonts"),
      },
    ]),
  ],
}
