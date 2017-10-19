import React from "react"
import glamorous from "glamorous"

import { resetTransform } from "utils/animations"

const defaultTimeout = 5000,
  style = ({ theme, color, duration = defaultTimeout }) => ({
    position: "relative",
    padding: theme.spacing / 2,
    border: `2px solid ${theme.colors[color] || color || "black"}`,
    overflow: "hidden",
    transition: ".1s transform ease",
    fontWeight: "bold",

    "&:active": {
      transform: "scale(0.9)"
    },

    ":before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.4,
      backgroundColor: color,
      transform: "translateX(-100%)",
      animation: `${resetTransform} ${duration}ms forwards linear`
    }
  })

class TimedButton extends React.Component {
  componentDidMount() {
    this.timeout = this.props.onTimeout && setTimeout(this.props.onTimeout, this.props.timeout)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { className, onClick, children, tabIndex } = this.props

    return (
      <div tabIndex={tabIndex || -1} role="button" className={className} onClick={onClick}>
        {children}
      </div>
    )
  }
}

export default glamorous(TimedButton)(style)
