import React from "react"
import { connect } from "react-redux"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, OverlayView } from "react-google-maps"
import { Transition } from "react-transition-group"

import InfoWindow from "./InfoWindow"
import data from "../../mock/smallGroups"

import mapOptions from "./map.options"

const Map = withGoogleMap(({ infoWindow, updateInfoWindow }) => (
  <GoogleMap options={mapOptions} defaultZoom={mapOptions.defaultZoom} defaultCenter={mapOptions.defaultCenter}>
    {
      <OverlayView
        position={infoWindow ? infoWindow.location : { lat: 0, lng: 0 }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={(width, height) => ({
          x: -(width / 2),
          y: -(height + 40)
        })}
      >
        <Transition
          mountOnEnter={true}
          in={infoWindow && infoWindow.hasOwnProperty("host")}
          appear={true}
          timeout={600}
        >
          {animationState => <InfoWindow className={animationState} {...infoWindow} />}
        </Transition>
      </OverlayView>
    }
    {data.map(smallGroup => (
      <Marker
        key={smallGroup.id}
        onClick={() => updateInfoWindow(smallGroup)}
        className="map-marker"
        icon="/img/small-groups/marker.svg"
        position={{ lat: smallGroup.location.lat, lng: smallGroup.location.lng }}
      />
    ))}
  </GoogleMap>
))

export default withScriptjs(
  connect(
    ({ smallGroupMap }) => ({ ...smallGroupMap }),
    dispatch => ({ updateInfoWindow: info => dispatch({ type: "UPDATE_MAP_INFO_WINDOW", info }) })
  )(Map)
)
