const webpack = require("webpack")
const { resolve } = require("path")

const config = require("./webpack.base")

module.exports = {
  ...config,
  plugins: [...config.plugins, new webpack.NamedModulesPlugin()],
  devServer: {
    contentBase: resolve(__dirname, "..", "public"),
    historyApiFallback: true,
    publicPath: "/",
  },
  devtool: "inline-source-map",
}
