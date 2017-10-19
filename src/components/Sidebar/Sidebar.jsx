import React from "react"
import glamorous from "glamorous"

import Transition from "react-transition-group/Transition"

const Sidebar = ({ className }) => (
    <Transition in={true} appear={true} timeout={600}>
      {animationState => <div className={`${className} ${animationState}`} />}
    </Transition>
  ),
  styles = ({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: theme.baseZIndex * 1000,
    width: 260,
    height: "100%",
    transform: "translateX(-260px)",
    transition: ".6s transform ease",
    background: "rgba(255, 255, 255, 0.2)",
    WebkitBackdropFilter: "blur(80px) saturate(150%) brightness(130%)",

    "&.entered": {
      transform: "none"
    }
  })

export default glamorous(Sidebar)(styles)
