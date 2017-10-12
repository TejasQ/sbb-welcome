import React from "react"
import glamorous from "glamorous"

const Layout = ({ className, children }) => (
    <div className={className}>
      <div className="col1" />
      <div className="col2">{children}</div>
    </div>
  ),
  style = () => ({
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "240px auto",

    col2: {
      display: "flex",
      alignItems: "center"
    }
  })

export default glamorous(Layout)(style)
