export default (state = { compact: false }, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, compact: !state.compact }
    case "COMPACT_SIDEBAR":
      return { ...state, compact: true }
    case "EXPAND_SIDEBAR":
      return { ...state, compact: false }
    default:
      return state
  }
}
