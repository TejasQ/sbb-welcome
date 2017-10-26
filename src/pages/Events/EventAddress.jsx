import React from "react"

import glamorous from "glamorous"

class EventAddress extends React.Component {
	constructor(props) {
	    super(props)
 	}

 	render() {
      	return (
      			<div style={{'font-size': 25, 'text-align': 'right',}}>
      				<p>AT</p>
      				<p>{ this.props.place.name }</p>
      				<p>{ this.props.place.location.street  } { this.props.place.location.zip }</p>
      				<p>{ this.props.place.location.city }</p>
              	</div>
      		)
	}
}

export default glamorous(EventAddress)({})