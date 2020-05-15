import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './src/redux/store'

import StackScreen from './src/screens/StackScreen'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackScreen />
      </Provider>
    )
  }
}

export default App
