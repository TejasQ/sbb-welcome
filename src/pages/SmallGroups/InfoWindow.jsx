import React from "react"
import { connect } from "react-redux"
import glamorous from "glamorous"

const InfoWindow = ({
    className,
    host = {},
    title,
    meetings = {},
    location = {},
    // ageGroup,
    // peopleGroup,
    picture,
    updateInfoWindow
  }) => {
    const heading = title || host.name
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
          <div className="actions">
            <button className="join">Ask to Join</button>
            <button onClick={() => updateInfoWindow()} className="close">
              Close
            </button>
          </div>
        </div>
      </div>
    )
  },
  style = ({ theme }) => ({
    padding: 0,
    width: 280,
    boxShadow: "0 16px 90px rgba(0, 0, 0, 0.3)",
    transition: ".3s transform ease, .3s opacity ease",
    opacity: 0,
    transform: `translateY(${theme.spacing}px)`,
    WebkitBackdropFilter: "blur(6px) saturate(90%) brightness(100%)",
    background: "rgba(255, 255, 255, .75)",
    "&.entering": {
      opacity: 0,
      transform: `translateY(${theme.spacing}px)`
    },

    "&.entered": {
      opacity: 1,
      transform: "none"
    },

    "& img": {
      maxWidth: "100% !important"
    },

    "& .content": {
      padding: theme.spacing
    },

    "& h1": {
      fontSize: 20,
      color: "#555",
      fontWeight: 600
    },

    "& h2": {
      fontWeight: 100,
      fontSize: 14,
      marginTop: 9
    },
    "& h3": {
      fontWeight: 400,
      marginTop: theme.spacing / 2,
      fontSize: 14,
      color: "#777"
    },
    "& .actions": {
      display: "flex"
    },
    "& button": {
      marginTop: 24,
      width: "100%",
      background: "transparent",
      border: 0,
      padding: theme.spacing,
      fontSize: 14,
      fontWeight: 600
    },
    "& button.join": {
      flex: "2 1 auto",
      marginRight: theme.spacing / 2,
      border: `2px solid ${theme.colors.primary}`,
      color: theme.colors.primary
    },
    "& button.close": {
      flex: "1 2 auto",
      border: `2px solid ${theme.colors.red}`,
      color: theme.colors.red
    }
  })

export default connect(
  () => ({}),
  dispatch => ({ updateInfoWindow: () => dispatch({ type: "UPDATE_MAP_INFO_WINDOW" }) })
)(glamorous(InfoWindow)(style))
