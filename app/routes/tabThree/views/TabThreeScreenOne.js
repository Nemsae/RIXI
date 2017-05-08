import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class TabThreeScreenOne extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <View style={style}>
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
            backgroundColor: 'deeppink',
            marginTop: 20,
          }}
        >
          <Text>{ 'Go to Splash Page' }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
