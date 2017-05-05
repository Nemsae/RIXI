import React, { Component } from 'react'
import { TouchableHighlight, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'
import { fetchData } from '../../actions/dataActions'

import splashBackgroundImage from '../../images/rixi-introduction-background.jpg'

import styles from './styles'

class SplashPage extends Component {
  render() {
    const {
      container,
      welcomeText,
      button,
      buttonText,
    } = styles

    const goToHomePage = () => Actions.homePage({origin: "splashPage"})

    return (
      <Image source={splashBackgroundImage} style={container}>
        <Text style={welcomeText}>Welcome to Rixi!</Text>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor='#E3C7C6'
          style={button}
          onPress={goToHomePage}
        >
          <Text style={buttonText}>Lets get started!</Text>
        </TouchableHighlight>
      </Image>
    )
  }

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
