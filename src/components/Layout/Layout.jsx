import React from "react"
import glamorous from "glamorous"

const Layout = ({ className, left, right }) => (
    <div className={className}>
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </div>
  ),
  style = ({ leftSize }) => ({
    position: "relative",
    width: "100vw",
    height: "100vh",
    display: "flex",

    "& .left": {
      width: leftSize,
      transition: "width .6s ease"
    },

    "& .right": {
      position: "relative",
      display: "flex",
      flex: "1 1 auto",
      alignItems: "center"
    }
  })

export default glamorous(Layout)(style)
