import React from 'react'
import { View, ToolbarAndroid, Text } from 'react-native'

import styles from './SplashPage/styles'
import backIcon from 'image!ic_arrow_back_white_24dp'
const Second = () => {
  const {
    container,
    welcomeText,
    // button,
    // buttonText,
  } = styles

  return (
    <View style={container}>
      <ToolbarAndroid
        // style=
        title="second"
        navIcon= {backIcon}
        onIconClicked= {this.props.navigator.pop}
        titleColor={'#FFFFFF'}
      />
      <Text style={welcomeText}>Second Screen</Text>
    </View>
  )
}

export default Second
