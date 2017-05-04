import React from 'react'
import { TouchableHighlight, Text, StyleSheet, Image } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../actions/dataActions'

import splashBackgroundImage from '../images/rixi-introduction-background.jpg'

let styles

const SplashPage = (props) => {
  const {
    container,
    welcomeText,
    button,
    buttonText,
  } = styles

  return (
    <Image source={splashBackgroundImage} style={container}>
      <Text style={welcomeText}>Welcome to Rixi!</Text>
      <TouchableHighlight style={button} onPress={() => props.fetchData()}>
        <Text style={buttonText}>Lets get started!</Text>
      </TouchableHighlight>
    </Image>
  )
}


styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // flexDirection: 'column',
  },
  welcomeText: {
    fontFamily: 'LobsterTwo-Bold',
    fontSize: 40,
  },
  button: {
    height: 60,
    width: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEFEE'
  },
  buttonText: {
    fontFamily: 'LobsterTwo-Italic',
    color: 'white',
    fontSize: 24
  },
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
)(SplashPage)
