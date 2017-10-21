import React from "react"
import { hydrate } from "react-dom"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import sidebarReducer from "./reducers/sidebarReducer"
import smallGroupMapReducer from "./reducers/smallGroupMapReducer"

const store = createStore(
  combineReducers({ sidebar: sidebarReducer, smallGroupMap: smallGroupMapReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

import App from "./App"

hydrate(
  <Provider store={store}>
    <App
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLbCMRfUwHsVvjf0MbhP1QuAfpj-hMexM&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
    />
  </Provider>,
  document.querySelector("#app")
)
