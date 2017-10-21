import React from "react"
import { connect } from "react-redux"
import glamorous from "glamorous"

import style from "./InfoWindow.style"

class InfoWindow extends React.Component {
  state = {
    name: "",
    email: "",
    isFormActive: false,
    askedToJoin: false
  }

  updateForm(field, value) {
    this.setState(() => ({ [field]: value }))
  }

  showForm() {
    this.setState(() => ({ isFormActive: true }))
  }

  hideForm() {
    this.setState(() => ({ isFormActive: false }))
  }

  /*
    This guy decides whether to show the form,
    or to actually submit the request.
  */
  askToJoin() {
    if (this.state.isFormActive) {
      this.props.askToJoin({ name: this.state.name, email: this.state.email, host: this.props.host })
      this.setState(() => ({ askedToJoin: true }))
      return
    }

    this.setState(() => ({ isFormActive: true }))
  }

  render() {
    const {
        className,
        host = {},
        title,
        meetings = {},
        location = {},
        // ageGroup,
        // peopleGroup,
        picture,
        updateInfoWindow
      } = this.props,
      heading = title || host.name

    return (
      <div className={`${className}`}>
        {picture && (
          <div className="picture">
            <img alt={heading} src={picture} />
          </div>
        )}
        <div className="content">
          <h1>{heading}</h1>
          <h2>{location.label}</h2>
          <h3>
            {meetings.day}, {meetings.time}
          </h3>

          {/* This is the form that people see when they click ASK TO JOIN */}
          <div className={`content__body${!this.state.askedToJoin && this.state.isFormActive ? " active" : ""}`}>
            <input
              onClick={e => e.target.focus()} // hack for iPad
              onChange={e => this.updateForm("name", e.target.value)}
              type="text"
              placeholder="Your Name..."
              value={this.state.name}
            />
            <input
              onClick={e => e.target.focus()} // hack for iPad
              onChange={e => this.updateForm("email", e.target.value)}
              type="text"
              placeholder="Your Email..."
              value={this.state.email}
            />
          </div>

          {/* This is the confirmation that people see after */}
          <div className={`content__body feedback${this.state.askedToJoin ? " active" : ""}`}>
            Thank you for checking out this small group. We have taken the necessary steps to get the ball rolling.
          </div>

          {/* Hello buttons */}
          <div className="actions">
            <button
              disabled={this.state.askedToJoin}
              className={`join${!this.state.askedToJoin && this.state.isFormActive ? " fill" : ""}`}
              onClick={() => this.askToJoin()}
            >
              {this.state.askedToJoin ? "Host Contacted!" : "Ask to Join"}
            </button>
            <button onClick={() => updateInfoWindow()} className="close">
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    updateInfoWindow: () => dispatch({ type: "UPDATE_MAP_INFO_WINDOW" }),
    askToJoin: prospective => dispatch({ type: "ADD_SMALL_GROUP_PROSPECTIVE", prospective })
  })
)(glamorous(InfoWindow)(style))
