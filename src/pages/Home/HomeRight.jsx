import React from "react"
import glamorous from "glamorous"

import HomeSlide from "./HomeSlide"
import homeSlides from "./homeSlides"

class HomePage extends React.Component {
  state = {
    activeHomeSlide: 0,
    timeout: 5000
  }

  updateActiveHomeSlide() {
    this.setState(
      prevState =>
        this.state.activeHomeSlide === homeSlides.length - 1
          ? { activeHomeSlide: 0 }
          : { activeHomeSlide: prevState.activeHomeSlide + 1 }
    )
  }

  render() {
    const { className } = this.props
    return (
      <div className={className}>
        {homeSlides.map((slide, index) => (
          <HomeSlide
            key={slide.id}
            status={this.state.activeHomeSlide === index}
            backgroundImage={slide.backgroundImage}
            button={{
              ...slide.button,
              onTimeout: () => this.updateActiveHomeSlide(),
              timeout: this.state.timeout
            }}
          >
            {slide.text}
          </HomeSlide>
        ))}
      </div>
    )
  }
}

const style = () => ({
  position: "relative",
  width: "100%",
  height: "100%"
})

export default glamorous(HomePage)(style)
