import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './app/configureStore';
import App from './app/index'

import './app/routes'

const store = configureStore()

// class Rixi extends React.Component {
//   constructor () {
//     super();
//     this.state = {
//       isLoading: true,
//       store: configureStore(() => this.setState({isLoading: false}))
//     }
//   }
//
//   render() {
//     if (this.state.isLoading) {
//       return null;
//     }
//     return (
//       <Provider store={this.state.store}>
//         <App />
//       </Provider>
//     )
//   }
// }
const Rixi = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('receiptLogger', () => Rixi)
