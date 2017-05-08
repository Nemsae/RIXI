import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class TabOneScreenOne extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: '#FFEFEE',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <View style={style}>
        <Text>{ 'Tab One - Screen One' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabOneScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'#E3C7C6',
            marginTop:20
          }}>
          <Text>{'Next Screen'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
