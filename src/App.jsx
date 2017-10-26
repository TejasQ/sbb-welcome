import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import glamorous, { ThemeProvider } from "glamorous"
import { withScriptjs } from "react-google-maps"

import theme from "./theme"

import applyGlobalFonts from "./utils/apply-global-fonts"
import applyGlobalStyles from "./utils/apply-global-styles"

import withTransition from "components/withTransition/withTransition"
import Sidebar from "components/Sidebar/Sidebar"
import Home from "./pages/Home/Home"
import SmallGroups from "./pages/SmallGroups/SmallGroups"
import EventsPage from "./pages/Events/EventsPage"

applyGlobalStyles()
applyGlobalFonts()

const App = ({ className }) => (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={className}>
          <Sidebar />
          <div className="content">
            <Route exact path={`${process.env.WEBPACK_PUBLIC_PATH}`} component={withTransition(Home)} />
            <Route
              exact
              path={`${process.env.WEBPACK_PUBLIC_PATH}small-groups`}
              component={withTransition(SmallGroups)}
            />
            <Route exact path={`${process.env.WEBPACK_PUBLIC_PATH}events`} 
            component={withTransition(EventsPage)} />
          </div>
        </div>
      </ThemeProvider>
    </Router>
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

export default glamorous(withScriptjs(App))(style)
