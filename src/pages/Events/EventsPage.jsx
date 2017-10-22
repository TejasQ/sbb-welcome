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

     window.fbAsyncInit = function() {
      FB.init({
        appId      : '478225382330396',
        cookie     : true, 
        xfbml      : true,
        version    : 'v2.1'
      });
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

    }.bind(this);


    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
  }

  componentWillUnmount() {

  }
  


  render() {
    const { events } = this.state;
    let eventList = events.map((event, index) => {
      return (
          <div style={{ display: 'flex', 'padding-bottom': '10px', }}>
            <div style={{flex: '1 0 700px', 'padding-right': '15px', }}>
              <EventImage
                event={event}>
              </EventImage>
            </div>
            <div style={{flex: '2 0 auto'}}>
              <h2>
                {event.name}
              </h2>
              {event.start_time}
              <span >
              {event.description}
              </span>
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