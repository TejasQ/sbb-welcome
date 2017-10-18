import React from "react"
import { connect } from "react-redux"
import { ThemeProvider } from "glamorous"

import theme from "./theme"
import Layout from "components/Layout/Layout"

import applyGlobalFonts from "./utils/apply-global-fonts"
import applyGlobalStyles from "./utils/apply-global-styles"

applyGlobalStyles()
applyGlobalFonts()

const App = ({ left, right, leftSize }) => {
  const Left = left,
    Right = right

  return (
    <ThemeProvider theme={theme}>
      <Layout leftSize={leftSize} left={<Left />} right={<Right />} />
    </ThemeProvider>
  )
}

export default connect(({ currentView }) => ({
  ...currentView
}))(App)
