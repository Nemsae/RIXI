import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import store from './configureStore'

import TabBarNavigation from './routes/tabBar/views/TabBarNavigation'

class Rixi extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('receiptLogger', () => Rixi)
// import SplashPage from './components/SplashPage'
// import HomePage from './components/HomePage'
// import configureStore from './configureStore';

// const store = configureStore()
//
// class WelcomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome to Rixi',
//   };
//
//   render() {
//     // console.log('props in App.js: ', this.props);
//     return (
//       <Provider store={store}>
//         <SplashPage navigation={this.props.navigation} />
//       </Provider>
//     )
//   }
// }
//
// const Rixi = StackNavigator({
//   Splash: { screen: WelcomeScreen },
//   Home: { screen: HomePage }
// });
//
// AppRegistry.registerComponent('receiptLogger', () => Rixi);
