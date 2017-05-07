import React from 'react'
import { View, Text } from 'react-native'

export default class TabOneScreenOne extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <View style={style}>
        <Text>{ 'Tab One - Screen One' }</Text>
      </View>
    )
  }
}
