import React from "react"
import glamorous from "glamorous"

import { resetTransform } from "utils/animations"
import errors from "./Slidy.errors.js"

const defaultDuration = 1,
  Slidy = ({ tabIndex = -1, duration = defaultDuration, direction = "up", className, children, onClick }) => {
    if (!Array.isArray(children)) {
      throw new Error(errors.weirdData)
    }
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <div className={className} onClick={onClick} role="list" tabIndex={tabIndex}>
        {children.map((element, index) => {
          const Element = () => element
          return (
            <div key={index} className="Slidy">
              <div className={`Slidy_${direction}`} style={{ animationDelay: `${index * duration / 2}s` }}>
                {<Element />}
              </div>
            </div>
          )
        })}
      </div>
    )
  },
  style = ({ duration = defaultDuration, animationDirection = "forwards", easing = "ease" }) => ({
    "& .Slidy": {
      overflow: "hidden"
    },
    "& .Slidy > *": {
      animation: `${resetTransform} ${duration}s ${easing} ${animationDirection}`
    },
    "& .Slidy_up": {
      transform: "translateY(100%)"
    },
    "& .Slidy_down": {
      transform: "translateY(-100%)"
    },
    "& .Slidy_right": {
      transform: "translateX(-100%)"
    },
    "& .Slidy_left": {
      transform: "translateX(100%)"
    }
  })

export default glamorous(Slidy)(style)
