import React from "react"
import glamorous, { ThemeProvider } from "glamorous"

import theme from "./theme"

import applyGlobalFonts from "./utils/apply-global-fonts"
import applyGlobalStyles from "./utils/apply-global-styles"

import Sidebar from "components/Sidebar/Sidebar"
import Home from "./pages/SmallGroups/SmallGroups"

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
    width: "100vw",
    "& h1": {
      fontWeight: 600,
      fontSize: 50,
      "@media (min-width: 1366px)": {
        fontSize: 70
      }
    }
  })

export default glamorous(App)(style)
