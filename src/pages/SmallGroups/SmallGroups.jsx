import React from "react"
import glamorous from "glamorous"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        options={{
          disableDefaultUI: true,
          styles: [
            {
              featureType: "all",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#99d18b"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "labels",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "road.local",
              elementType: "labels.text",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#6dcff6"
                }
              ]
            }
          ]
        }}
        defaultZoom={14}
        defaultCenter={{ lat: 52.5145057, lng: 13.3868546 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: 52.5145057, lng: 13.3868546 }} />}
      </GoogleMap>
    ))
  ),
  SmallGroups = ({ className }) => (
    <div className={className}>
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )

export default glamorous(SmallGroups)({
  width: "100vw",
  height: "100vh"
})
