export default (
  state = {
    sidebar: true
  },
  action
) => {
  switch (action.type) {
    case "HOME_PAGE_HIDE_SIDEBAR":
      return { ...state, sidebar: false }
    default:
      return state
  }
}
