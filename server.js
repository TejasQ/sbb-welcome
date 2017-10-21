const express = require("express"),
  app = express()

app.use(express.static("dist"))
app.use("*", express.static("dist"))

app.listen(4000)
