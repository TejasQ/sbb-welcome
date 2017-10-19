import React from "react"
import glamorous from "glamorous"

import Transition from "react-transition-group/Transition"

import Slidy from "components/Slidy/Slidy"

const Sidebar = ({ className }) => (
    <Transition in={true} appear={true} timeout={600}>
      {animationState => (
        <div className={`${className} ${animationState}`}>
          <div className="logo">
            <img alt="Saddleback" src="/img/logo.png" />
          </div>

          <div className="menu">
            <Slidy direction="left">
              {[
                <div className="menu__link">About Saddleback</div>,
                <div className="menu__link">Small Groups</div>,
                <div className="menu__link">Ministries</div>,
                <div className="menu__link">Events</div>,
                <div className="menu__link">Contact</div>
              ]}
            </Slidy>
          </div>
        </div>
      )}
    </Transition>
  ),
  styles = ({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: theme.baseZIndex * 1000,
    width: theme.sidebarWidth,
    height: "100%",
    transform: "translateX(-260px)",
    transition: ".6s transform ease",
    background: "rgba(0, 0, 0, 0.2)",
    WebkitBackdropFilter: "blur(80px) saturate(150%) brightness(130%)",

    "& .logo img": {
      display: "block",
      margin: "100px auto",
      maxWidth: 75
    },

    "& .menu__link": {
      padding: theme.spacing / 2,
      borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      fontWeight: 600,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "white"
    },

    "&.entered": {
      transform: "none"
    }
  })

export default glamorous(Sidebar)(styles)
