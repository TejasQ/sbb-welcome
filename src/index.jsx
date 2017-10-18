import React from "react"
import { hydrate } from "react-dom"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"

import currentViewReducer from "./reducers/currentViewReducer"
import homePageReducer from "./reducers/homePageReducer"

const rootReducer = combineReducers({ currentView: currentViewReducer, homePage: homePageReducer }),
  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

import App from "./App"

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
)
