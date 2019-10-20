import React from "react"
import { connect } from "react-redux"
import glamorous from "glamorous"

import Map from "./Map"

const Container = glamorous("div")({
  height: "100vh",

  " > div": { height: "100vh" }
})

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
      <Container className={`${className} page`}>
        <Map />
      </Container>
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
    "& .map-marker": {
      fill: theme.colors.primary
    }
  }))
)
