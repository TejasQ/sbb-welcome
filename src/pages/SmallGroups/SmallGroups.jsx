import React from "react"
import { connect } from "react-redux"
import glamorous from "glamorous"

import Map from "./Map"

class SmallGroups extends React.Component {
  componentDidMount() {
    this.props.hideSidebar()
  }

  componentWillUnmount() {
    this.props.showSidebar()
  }

  render() {
    const { className } = this.props
    return (
      <div className={`${className} page`}>
        <Map containerElement={<div style={{ height: `100%` }} />} mapElement={<div style={{ height: `100%` }} />} />}
        />
      </div>
    )
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    hideSidebar: () => dispatch({ type: "HIDE_SIDEBAR" }),
    showSidebar: () => dispatch({ type: "SHOW_SIDEBAR" })
  })
)(
  glamorous(SmallGroups)(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    "& .map-marker-container": {
      transform: "scale(0)",
      transformOrigin: "center bottom",
      transition: "transform 0.3s cubic-bezier(0.48, 0.49, 0.67, 1.93)"
    },
    "& .map-marker-container.entered": {
      transform: "none"
    },
    "& .map-marker": {
      fill: theme.colors.darkOrange
    },
    "& .map-marker__pulse": {
      position: "absolute",
      top: 13,
      left: -4,
      zIndex: -1,
      borderColor: theme.colors.darkOrange
    }
  }))
)
