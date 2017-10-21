export default (state = JSON.parse(localStorage.getItem("sbb-sg-prospects")) || [], action) => {
  switch (action.type) {
    case "ADD_SMALL_GROUP_PROSPECTIVE":
      // If someone already signed up to join a small group,
      if (
        state.filter(
          prospective =>
            prospective.email === action.prospective.email && prospective.host.name === action.prospective.host.name,
        ).length
      ) {
        // Do nothing.
        return state
      }

      // Otherwise, update the queue.
      const newState = [...state, action.prospective]

      // delegate this to a serviceWorker when we plug this into the backend.
      localStorage.setItem("sbb-sg-prospects", JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
