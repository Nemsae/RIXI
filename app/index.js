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
    welcomeText,
    button,
    backgroundImage,
    buttonText,
    mainContent,
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
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover',
  // },
  welcomeText: {
    // fontFamily: 'notoserif',
    fontSize: 20,
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
