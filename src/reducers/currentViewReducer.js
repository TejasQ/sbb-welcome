import HomeLeft from "../pages/Home/HomeLeft"
import HomeRight from "../pages/Home/HomeRight"

export default (
  state = {
    left: HomeLeft,
    right: HomeRight,
    leftSize: 0,
    isViewChanging: false,
  },
  action,
) => {
  switch (action.type) {
    case "UPDATE_VIEW":
      return { ...state, isViewChanging: false, ...action.newView }
    default:
      return state
  }
}
