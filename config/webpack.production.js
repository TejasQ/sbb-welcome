const CopyWebpackPlugin = require("copy-webpack-plugin")
const baseConfig = require("./webpack.base")
const { resolve } = require("path")

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.pluigins,
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
