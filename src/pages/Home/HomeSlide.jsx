import React from "react"
import Transition from "react-transition-group/Transition"
import glamorous from "glamorous"
import { Link } from "react-router-dom"

import Slidy from "components/Slidy/Slidy"
import TimedButton from "components/TimedButton/TimedButton"

const duration = 600,
  HomeSlide = ({ button = {}, status, className, children }) => (
    <Transition unmountOnExit={true} in={status} timeout={duration}>
      {animationStatus => (
        <div className={`${className} ${animationStatus}`}>
          <Slidy className="text">{children}</Slidy>
          {button.link ? (
            <Link to={button.link}>
              <TimedButton className="button" color="white" {...button} />
            </Link>
          ) : (
            <TimedButton className="button" color="white" {...button} />
          )}
        </div>
      )}
    </Transition>
  ),
  style = ({ theme, backgroundImage }) => ({
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing * 4,
    paddingLeft: window.innerWidth <= 414 ? 96 : `calc(var(--sidebar__width) + ${theme.spacing * 4}px)`,
    transition: `${duration}ms transform ease, ${duration}ms opacity ease`,
    backgroundImage: backgroundImage || "linear-gradient(45deg, #EFEFF0 0%, #fff 100%)",
    backgroundSize: "cover",
    color: "white",
    "&.entering, &.exiting": {
      transform: "translateY(50px)",
      opacity: 0
    },
    "&.entered": {
      transform: "none",
      opacity: 1
    },
    "& .text": {
      position: "relative",
      fontSize: 26,
      lineHeight: 1,
      fontWeight: 300
    },
    "& h1": {
      "word-wrap": "break-word",
      hyphens: "auto"
    },
    "& .button": {
      position: "absolute",
      bottom: theme.spacing * 4,
      right: theme.spacing * 4,
      padding: `${theme.spacing}px ${theme.spacing * 2}px`,
      color: "white"
    }
  })

export default glamorous(HomeSlide)(style)
