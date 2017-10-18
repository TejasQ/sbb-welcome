import React from "react"
import glamorous from "glamorous"

import { resetTransform } from "utils/animations"
import errors from "./SlidyText.errors.js"

const defaultDuration = 1,
  SlidyText = ({ duration = defaultDuration, direction = "up", className, children }) => {
    if (!Array.isArray(children)) {
      throw new Error(errors.weirdData)
    }
    return (
      <div className={className}>
        {children.map((child, index) => (
          <div key={index} className="SlidyText">
            <h1 className={`SlidyText_${direction}`} style={{ animationDelay: `${index * duration / 2}s` }}>
              {child}
            </h1>
          </div>
        ))}
      </div>
    )
  },
  style = ({ duration = defaultDuration, direction = "forwards", easing = "ease" }) => ({
    "& .SlidyText": {
      overflow: "hidden"
    },
    "& .SlidyText > h1": {
      animation: `${resetTransform} ${duration}s ${easing} ${direction}`
    },
    "& .SlidyText_up": {
      transform: "translateY(100%)"
    },
    "& .SlidyText_down": {
      transform: "translateY(-100%)"
    },
    "& .SlidyText_right": {
      transform: "translateX(-100%)"
    },
    "& .SlidyText_left": {
      transform: "translateX(100%)"
    }
  })

export default glamorous(SlidyText)(style)
