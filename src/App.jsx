import React from "react"
import glamorous, { ThemeProvider } from "glamorous"

import theme from "./theme"

import applyGlobalFonts from "./utils/apply-global-fonts"
import applyGlobalStyles from "./utils/apply-global-styles"

import Sidebar from "components/Sidebar/Sidebar"
import Home from "./pages/Home/Home"

applyGlobalStyles()
applyGlobalFonts()

const App = ({ className }) => (
    <ThemeProvider theme={theme}>
      <div className={className}>
        <Sidebar />
        <div className="content">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  ),
  style = () => ({
    width: "100vw"
  })

export default glamorous(App)(style)
