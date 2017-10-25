import React from "react"

import glamorous from "glamorous"

class EventImage extends React.Component {
	constructor(props) {
	    super(props)

	    this.state = {
	      imageUrl: ''
	    }

 	}

 	componentWillMount() {
 		FB.api(`/${this.props.event.id}/picture?type=large&redirect=0&square=true`,  function(response) {
            this.setState({imageUrl: response.data.url});
          }.bind(this));
 	}

 	render() {
      	return (
      		<img style={{maxWidth: '100%', width: '700px'}}  src={this.state.imageUrl}/>
      		)
	}
}

export default glamorous(EventImage)({})