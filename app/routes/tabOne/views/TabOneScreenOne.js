import React from 'react'
import { View, Text } from 'react-native'

import SplashPage from '../../../components/SplashPage/'

export default class TabOneScreenOne extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <SplashPage />
    )
  }
}

{/* <View style={style}>
  <SplashPage />
</View> */}
