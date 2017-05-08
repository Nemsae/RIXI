import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class TabTwoScreenTwo extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: '#FFEFEE',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <View style={style}>
        <Text>{ 'Tab Two - Screen Two' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'#E3C7C6',
            marginTop:20
          }}>
          <Text>{'Go Back'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
