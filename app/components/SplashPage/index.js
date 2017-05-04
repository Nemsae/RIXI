import React from 'react'
import { TouchableHighlight, Text, Image } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../../actions/dataActions'

import splashBackgroundImage from '../../images/rixi-introduction-background.jpg'

import styles from './styles'

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
