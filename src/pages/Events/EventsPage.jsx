/*global FB*/
import React from "react"

import glamorous from "glamorous"
import EventImage from "./EventImage"
import EventAddress from "./EventAddress"

class EventsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: []
    }
  }

  componentWillMount() {
    if (FB) {
      FB.getLoginStatus(
        function(response) {
          if (response.status === "connected") {
            FB.api(
              "/SaddlebackBerlin/events",
              function(response) {
                this.setState({ events: response.data })
              }.bind(this)
            )
          } else {
            FB.login()
          }
        }.bind(this)
      )
    }
  }

  render() {
    const { events } = this.state,
      { className } = this.props

    let friendlyDate = date => {
        const DateOptions = {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }
        let formedDate = new Date(Date.parse(date))
        return formedDate.toLocaleTimeString("en", DateOptions)
      },
      eventList = events.map(event => {
        return (
          <div style={{ display: "flex", "padding-bottom": "10px" }}>
            <div style={{ flex: "1 0 700px", "padding-right": "15px" }}>
              <EventImage event={event} />
            </div>
            <div style={{ flex: "2 0 initial", "margin-top": "100", "margin-right": "100" }}>
              <h2 style={{ "font-size": 70, "text-align": "right" }}>{event.name}</h2>
              <p style={{ "font-size": 30, "text-align": "right" }}>{friendlyDate(event.start_time)}</p>
              {event.place.location ? <EventAddress place={event.place}> </EventAddress> : ""}
            </div>
          </div>
        )
      })

    return <div className={`${className} page`}>{eventList}</div>
  }
}

export default glamorous(EventsPage)({})
