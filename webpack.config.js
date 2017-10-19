const { resolve } = require("path")
module.exports = env => {
  const mode = env || process.env.NODE_ENV || "dev"
  console.log(`Building for ${mode}...`)
  return require(resolve(`./config/webpack.${mode}`))
}
