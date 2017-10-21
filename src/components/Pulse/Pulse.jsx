import React from "react"
import glamorous from "glamorous"
import { css } from "glamor"

const animation = css.keyframes({
  from: {
    opacity: 0,
    transform: "rotate3d(8, -0.9, 1, 76deg) scale(0)",
  },
  "50%": {
    opacity: 1,
  },
  to: {
    opacity: 0,
    transform: "rotate3d(8, -0.9, 1, 76deg) scale(1)",
  },
})

const Pulse = ({ className, style }) => <div className={className} style={style} />

export default glamorous(Pulse)(({ size = 40, color = "red" }) => ({
  height: size,
  width: size,
  borderRadius: "50%",
  opacity: 0,
  transform: "rotate3d(8, -0.9, 1, 76deg) scale(var(--scale))",
  animation: `${animation} 2s ease infinite`,
  background: "transparent",
  border: `5px solid ${color}`,
}))
