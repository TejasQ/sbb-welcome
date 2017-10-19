import { css } from "glamor"

export default () => {
  css.global("html, body", {
    margin: 0,
    padding: 0
  })

  css.global("*", {
    fontFamily: "'SBbody', Helvetica, sans-serif",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    boxSizing: "border-box"
  })

  css.global("body", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh"
  })

  css.global("h1, h2, h3, h4, h5, h6, p", { margin: 0 })
}
