import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Image } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions/dataActions'
// import { fetchData } from './actions/sagaActions'

import splashBackgroundImage from './images/rixi-introduction-background.jpg'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    splashBackground,
    buttonText,
    mainContent,
  } = styles

  return (
    <View style={container}>
      <Text style={text}>Rixi Template</Text>
      <TouchableHighlight style={button} onPress={() => props.fetchData()}>
        <Text style={buttonText}>Get Started!</Text>
      </TouchableHighlight>
      <View style={mainContent}>
        <Image source={splashBackgroundImage} style={splashBackground} />
      </View>
    </View>
  )
}


styles = StyleSheet.create({
  splashBackground: {
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEFEE'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
    alignItems: 'center',
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
