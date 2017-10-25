import React from "react"

import glamorous from "glamorous"
import EventImage from "./EventImage"

class EventsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: []
    }

  }

  componentWillMount() {
    FB.getLoginStatus( function(response) {
      if (response.status === 'connected') {
          FB.api('/SaddlebackBerlin/events',  function(response) {
          this.setState({events: response.data});
        }.bind(this));
      }
      else {
        FB.login();
      }
    }.bind(this));
  }

  render() {
    const { events } = this.state;

    let friendlyDate = (date) => {
      const DateOptions = {  
          weekday: "long", year: "numeric", month: "short",  
          day: "numeric", hour: "2-digit", minute: "2-digit"  
      }
      let formedDate = new Date(Date.parse(date))
      return formedDate.toLocaleTimeString("en", DateOptions)
    }

    let eventList = events.map((event, index) => {
      return (
          <div style={{ display: 'flex', 'padding-bottom': '10px', }}>
            <div style={{flex: '1 0 700px', 'padding-right': '15px', }}>
              <EventImage
                event={event}>
              </EventImage>
            </div>
            <div style={{flex: '2 0 initial', 'margin-top': '100', 'margin-right': '100'}}>
              <h2 style={{'font-size': 70, 'text-align': 'right',}}>
                {event.name}
              </h2>
              <p>{friendlyDate(event.start_time)}</p>
              <p >
              {event.description}
              </p>
            </div>
          </div>
    )})

    
    const { className } = this.props
    return (
      <div className={`${className} page`}>
        { eventList }

      </div>
    )
  }
}

export default glamorous(EventsPage)({})