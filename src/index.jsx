import React from "react"
import { hydrate } from "react-dom"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import sidebarReducer from "./reducers/sidebarReducer"

const store = createStore(
  combineReducers({ sidebar: sidebarReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

import App from "./App"

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
)
