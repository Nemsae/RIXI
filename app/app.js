import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'

import SplashPage from './components/SplashPage'
import configureStore from './configureStore';

const store = configureStore()

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Rixi',
  };

  render() {
    return (
      <Provider store={store}>
        <SplashPage />
      </Provider>
    )
  }
}

const Rixi = StackNavigator({
  Splash: { screen: WelcomeScreen },
});

AppRegistry.registerComponent('receiptLogger', () => Rixi);
