import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import HomePage from '../../../components/SplashPage/'

export default class TabOneScreenTwo extends React.Component {
  render() {
    let style = {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return(
      <View style={style}>
        <Text>{ 'Tab One - Screen Two' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'purple',
            marginTop:20
          }}>
          <Text>{'Go back a screen'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
