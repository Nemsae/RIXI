import React from 'react'
import {
  AppRegistry,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
// import { Provider, connect } from 'react-redux'

import SplashPage from './components/SplashPage'
import configureStore from './configureStore';

const store = configureStore()

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Rixi'
  }

  render () {
    return (
      <Provider store={store}>
        <SplashPage />
      </Provider>
    )
  }
}

const Rixi = StackNavigator({
  Splash: { screen: App },
})

AppRegistry.registerComponent('receiptLogger', () => Rixi)

// function mapStateToProps (state) {
//   return {
//     appData: state.appData,
//   }
// }
//
// function mapDispatchToProps (dispatch) {
//   return {
//     fetchData: () => dispatch(fetchData()),
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
