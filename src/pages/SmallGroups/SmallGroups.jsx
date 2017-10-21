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
    showSidebar: () => dispatch({ type: "SHOW_SIDEBAR" }),
  }),
)(
  glamorous(SmallGroups)(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    "& .map-marker-container": {
      transform: "translateY(-100vh)",
      transition: ".6s transform ease",
    },
    "& .map-marker-container.entered": {
      transform: "none",
    },
    "& .map-marker": {
      fill: theme.colors.darkOrange,
    },
    "& .map-marker__pulse": {
      position: "absolute",
      top: 13,
      left: -4,
      zIndex: -1,
      borderColor: theme.colors.darkOrange,
    },
  })),
)
