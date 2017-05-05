import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

import HomePage from '../components/HomePage'
import SplashPage from '../components/SplashPage'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="splashPage" component={SplashPage} title="Welcome to Rixi" initial={true} />
          <Scene key="homePage" component={HomePage} title="Rixi Home" />
        </Scene>
      </Router>
    )
  }
}
