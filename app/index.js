import React from 'react'
import { View } from 'react-native'

import { connect } from 'react-redux'
import SplashPage from './components/SplashPage'

import './routes'

const App = () => {
  return (
    <SplashPage />
  )
}

function mapStateToProps (state) {
  return {
    appData: state.appData,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
