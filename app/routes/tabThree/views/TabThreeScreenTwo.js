import React from 'react'
import { View, Text } from 'react-native'

export default class TabThreeScreenTwo extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <View style={style}>
        <Text>{ 'Tab Three - Screen Two' }</Text>
      </View>
    )
  }
}
