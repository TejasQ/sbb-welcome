import { css } from "glamor"

export default () => {
  css.global("html, body", {
    margin: 0,
    padding: 0,
  })

  css.global("*", {
    fontFamily: "'SBbody', Helvetica, sans-serif",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    boxSizing: "border-box",
  })

  css.global("h1, h2, h3, h4, h5, h6, p", { margin: 0 })
  css.global("h1", { fontWeight: 600 })
}
