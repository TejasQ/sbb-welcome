import React from "react"
import glamorous from "glamorous"

import Map from "./Map"

const SmallGroups = () => (
  <div>
    <Map
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)

export default glamorous(SmallGroups)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  "& .map-marker": {
    fill: theme.colors.primary
  }
}))
