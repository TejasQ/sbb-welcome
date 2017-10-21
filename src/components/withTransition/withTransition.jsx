import React from "react"
import { Transition } from "react-transition-group"

export default InputComponent =>
  class extends React.Component {
    render() {
      return (
        <Transition in={true} appear={true} timeout={600} unmountOnExit={true}>
          {animationState => <InputComponent className={animationState} />}
        </Transition>
      )
    }
  }
