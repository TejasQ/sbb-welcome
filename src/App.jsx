import React from "react"
import glamorous, { ThemeProvider } from "glamorous"

import theme from "./theme"

import applyGlobalFonts from "./utils/apply-global-fonts"
import applyGlobalStyles from "./utils/apply-global-styles"

import Sidebar from "components/Sidebar/Sidebar"
import Home from "./pages/Home/HomeRight"

applyGlobalStyles()
applyGlobalFonts()

const App = ({ className }) => (
    <ThemeProvider theme={theme}>
      <div className={className}>
        <Sidebar />
        <Home />
      </div>
    </ThemeProvider>
  ),
  style = {
    position: "relative",
    width: 1024,
    height: 768,
    margin: "0 auto",
    ":after": {
      content: "''",
      position: "absolute",
      top: -59,
      left: -391,
      zIndex: -1,
      width: 1804,
      height: 898,
      overflow: "visible",
      backgroundImage: "url('https://maquette.pro/wp-content/uploads/2016/08/3-22.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }
  }

export default glamorous(App)(style)
