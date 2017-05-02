import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './app/configureStore';
import App from './app/app.js'

const store = configureStore()

const Rixi = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('receiptLogger', () => Rixi)
