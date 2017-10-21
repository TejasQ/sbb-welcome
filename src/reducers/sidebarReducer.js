import config from "config"

export default (state = { compact: window.innerWidth <= config.breakpoints.iphone6Plus }, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, compact: !state.compact }
    case "SHOW_SIDEBAR":
      return { ...state, compact: false }
    case "HIDE_SIDEBAR":
      return { ...state, compact: true }
    default:
      return state
  }
}
