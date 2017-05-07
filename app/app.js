import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'

import SplashPage from './components/SplashPage'
import HomePage from './components/HomePage'
import configureStore from './configureStore';

const store = configureStore()

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Rixi',
  };

  render() {
    // console.log('props in App.js: ', this.props);
    return (
      <Provider store={store}>
        <SplashPage navigation={this.props.navigation} />
      </Provider>
    )
  }
}

const Rixi = StackNavigator({
  Splash: { screen: WelcomeScreen },
  Home: { screen: HomePage }
});

AppRegistry.registerComponent('receiptLogger', () => Rixi);
