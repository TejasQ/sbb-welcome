const { resolve } = require("path")
module.exports = env => require(resolve(`./config/webpack.${env || process.env.NODE_ENV || "dev"}`))
