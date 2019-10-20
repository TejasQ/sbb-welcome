import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withLeaflet, Map, Marker, Popup, TileLayer } from "react-leaflet"

// eslint-disable-next-line one-var
const getCoordinates = location =>
  fetch(`https://open.mapquestapi.com/geocoding/v1/address?key=he0HiFZ52rHFWabYCpGK1IiRMwfaTNFj&location=${location}`)
    .then(r => r.json())
    .then(r => r.results.map(r => [r.locations[0].latLng.lat, r.locations[0].latLng.lng]))
    .then(r => r[0])

// eslint-disable-next-line one-var
const MapComponent = () => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    let fields
    fetch("https://api.airtable.com/v0/appiV7B0SM0E5LGOV/Imported%20table", {
      headers: { Authorization: "Bearer keyxNf2vSywCLSypi" }
    })
      .then(a => a.json())
      .then(g => {
        fields = g.records.map(r => ({ ...r.fields })).filter(r => Boolean(r.Host))
      })
      .then(() => {
        return Promise.all(
          fields.map(async field => {
            const coords = await getCoordinates(field.Location)
            field.coords = coords
          })
        )
      })
      .then(() => setGroups(fields))
  }, [])

  // console.log(groups)

  return (
    <Map center={[52.520008, 13.404954]} zoom={11}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {groups.map(g => (
        <Marker position={g.coords}>
          <Popup>
            <h1>{g.Host}</h1>
            <h2>
              {g.Day} @ {g.Time}
            </h2>
            <h3>{g.Location}</h3>
          </Popup>
        </Marker>
      ))}
    </Map>
  )
}

export default connect(
  ({ smallGroupMap }) => ({ ...smallGroupMap }),
  dispatch => ({ updateInfoWindow: info => dispatch({ type: "UPDATE_MAP_INFO_WINDOW", info }) })
)(withLeaflet(MapComponent))
