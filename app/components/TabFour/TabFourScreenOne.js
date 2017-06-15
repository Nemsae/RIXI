import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class TabThreeScreenOne extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: '#FFEFEE',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <View style={style}>
        <TouchableOpacity
          onPress={
            () => this.props.navigation.navigate('TabFourScreenTwo')
          }
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: '#E3C7C6',
            marginTop: 20,
          }}
        >
          <Text>{ 'Go to Next Screen' }</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            () => this.props.navigation.dispatch({
              type: 'JUMP_TO_TAB',
              payload: { index: 0 }
            })
          }
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: '#E3C7C6',
            marginTop: 20,
          }}
        >
          <Text>{ 'Go to Splash Page' }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
