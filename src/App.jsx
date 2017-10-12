import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeProvider } from "glamorous"

import theme from "./theme"
import HomePage from "./pages/Home/Home"

import applyGlobalFonts from "./utils/apply-global-fonts"
import applyGlobalStyles from "./utils/apply-global-styles"

applyGlobalStyles()
applyGlobalFonts()

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  </ThemeProvider>
)
