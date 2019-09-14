import React from "react"

import { Provider } from "react-redux";

import store, { persistor } from "./containers/store"

import { PersistGate } from 'redux-persist/es/integration/react'

import App from "./containers/App"


export default class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}


