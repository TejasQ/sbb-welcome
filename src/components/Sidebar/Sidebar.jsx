import React from "react"
import glamorous from "glamorous"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import Transition from "react-transition-group/Transition"
import InfoIcon from "react-icons/lib/md/info-outline"
import SmallGroupsIcon from "react-icons/lib/md/home"
import MinistriesIcon from "react-icons/lib/fa/recycle"
import EventsIcon from "react-icons/lib/fa/calendar"
import FeedbackIcon from "react-icons/lib/fa/comments-o"

import Slidy from "components/Slidy/Slidy"

const Sidebar = ({ className, compact, toggleSidebar }) => (
    <Transition in={true} appear={true} timeout={600}>
      {animationState => (
        <div
          role="menubar"
          tabIndex={-1}
          onClick={() => toggleSidebar()}
          className={`${className} ${animationState}${compact ? " compact" : ""}`}
        >
          <NavLink to={`${process.env.WEBPACK_PUBLIC_PATH}`}>
            <div className="logo">
              <img alt="Saddleback" src={`${process.env.WEBPACK_PUBLIC_PATH}img/logo.png`} />
            </div>
          </NavLink>

          <div className="menu">
            <Slidy onClick={event => event.stopPropagation()} direction="left">
              {[
                <div key={1} className="menu__link">
                  About Saddleback
                  <div className="menu__icon">
                    <InfoIcon />
                  </div>
                </div>,
                <NavLink
                  key={2}
                  activeClassName="menu__link_active"
                  to={`${process.env.WEBPACK_PUBLIC_PATH}small-groups`}
                  className="menu__link"
                >
                  Small Groups
                  <div className="menu__icon">
                    <SmallGroupsIcon />
                  </div>
                </NavLink>,
                <div key={3} className="menu__link">
                  Ministries
                  <div className="menu__icon">
                    <MinistriesIcon />
                  </div>
                </div>,
                <NavLink key={4} activeClassName="menu__link_active" to="/events" className="menu__link">
                  Events
                  <div className="menu__icon">
                    <EventsIcon />
                  </div>
                </NavLink>,
                <div key={5} className="menu__link">
                  Feedback
                  <div className="menu__icon">
                    <FeedbackIcon />
                  </div>
                </div>
              ]}
            </Slidy>
          </div>
        </div>
      )}
    </Transition>
  ),
  styles = ({ theme }) => ({
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: theme.baseZIndex * 1000,
    width: "var(--sidebar__width)",
    height: "100%",
    transform: "translateX(-260px)",
    transition: ".6s transform ease",
    background: "rgba(0, 0, 0, 0.2)",
    WebkitBackdropFilter: "blur(80px) saturate(150%) brightness(130%)",

    "& a": {
      textDecoration: "none"
    },

    "&.entered": {
      transform: "none"
    },

    "&.compact": {
      transform: `translateX(${(theme.sidebarWidth - 60) * -1}px)`
    },

    "& .logo img": {
      display: "block",
      margin: "100px auto",
      maxWidth: 75,
      transition: "transform .6s ease"
    },

    "&.compact .logo img": {
      transform: `scale(0.5) translateX(${theme.sidebarWidth - 60}px)`
    },

    "& .menu__link": {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing,
      paddingRight: 21,
      width: "100%",
      borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      fontWeight: 600,
      transition: "background-color .15s ease, text-shadow .3s ease, color .3s ease",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "white"
    },

    "& .menu__link_active": {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    },

    "& .menu__link:active": {
      backgroundColor: "rgba(255, 255, 255, 0.5)"
    },

    "& .menu__icon": {
      marginLeft: "auto",
      fontSize: 19
    }
  })

export default connect(
  ({ sidebar }) => ({ ...sidebar }),
  dispatch => ({ toggleSidebar: () => dispatch({ type: "TOGGLE_SIDEBAR" }) })
)(glamorous(Sidebar)(styles))
