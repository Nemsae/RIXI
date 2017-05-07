import React from 'react'
import { View, Text } from 'react-native'

export default class TabTwoScreenTwo extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <View style={style}>
        <Text>{ 'Tab Two - Screen Two' }</Text>
      </View>
    )
  }
}
