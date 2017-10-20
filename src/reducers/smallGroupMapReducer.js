export default (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_MAP_INFO_WINDOW":
      return { ...state, infoWindow: action.info }
    default:
      return state
  }
}
