import React from "react"
import { connect } from "react-redux"
import { withGoogleMap, GoogleMap, OverlayView } from "react-google-maps"
import { Transition } from "react-transition-group"

import InfoWindow from "./InfoWindow"
import Pulse from "components/Pulse/Pulse"
import data from "../../mock/smallGroups" // use a backend.

import mapOptions from "./map.options"

const Map = ({ infoWindow, updateInfoWindow }) => (
  <GoogleMap options={mapOptions} defaultZoom={mapOptions.defaultZoom} defaultCenter={mapOptions.defaultCenter}>
    {
      /* This is our InfoWindow that shows when someone taps on a small group. */
      <OverlayView
        position={infoWindow ? infoWindow.location : { lat: 0, lng: 0 }}
        mapPaneName={OverlayView.FLOAT_PANE}
        getPixelPositionOffset={(width, height) => ({
          x: -(width / 2),
          y: -(height + 40)
        })}
      >
        <Transition
          mountOnEnter={true}
          unmountOnExit={true}
          in={infoWindow && infoWindow.hasOwnProperty("host")}
          appear={true}
          timeout={300}
        >
          {animationState => <InfoWindow className={animationState} {...infoWindow} />}
        </Transition>
      </OverlayView>
    }

    {/*
      Now, map over each small group and create markers.
      We use the OverlayView again instead of Markers because Markers are too hard to control
      and exist in a pane that conflicts with the pane that the InfoWindows are on, believe it or not.

      Weird, right? Anyway...
    */}
    {data.map((smallGroup, index) => (
      <OverlayView
        key={smallGroup.id}
        position={{ lat: smallGroup.location.lat, lng: smallGroup.location.lng }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <Transition appear={true} timeout={600} in={true}>
          {animationState => (
            <div style={{ position: "relative" }}>
              {/* The almight marker */}
              <svg
                onClick={() => updateInfoWindow(smallGroup)}
                className={`map-marker-container ${animationState}`}
                style={{ transitionDelay: `${index / 16}s` }}
                height="40px"
                viewBox="0 0 40 40"
                width="40px"
              >
                <g transform="translate(288 144)">
                  <path
                    className="map-marker"
                    d="M-272-144c-6.627,0-12,5.373-12,12s10,20,12,20s12-13.373,12-20S-265.373-144-272-144z M-272-124c-4.412,0-8-3.59-8-8   s3.588-8,8-8s8,3.59,8,8S-267.588-124-272-124z"
                  />
                </g>
              </svg>

              {/* Cool Pulse */}
              <Pulse className="map-marker__pulse" style={{ animationDelay: `${index / 16}s` }} />
            </div>
          )}
        </Transition>
      </OverlayView>
    ))}
  </GoogleMap>
)

export default connect(
  ({ smallGroupMap }) => ({ ...smallGroupMap }),
  dispatch => ({ updateInfoWindow: info => dispatch({ type: "UPDATE_MAP_INFO_WINDOW", info }) })
)(withGoogleMap(Map))
