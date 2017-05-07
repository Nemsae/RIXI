import React, { Component } from 'react'
import { TouchableHighlight, Text, Image } from 'react-native'
import { connect } from 'react-redux'

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import { fetchData } from '../../actions/dataActions'
import splashBackgroundImage from '../../images/rixi-introduction-background.jpg'
import styles from './styles'

class SplashPage extends Component {
  static navigationOptions = {
    title: 'Welcome to Rixi',
  };

  render() {
    const {
      container,
      welcomeText,
      button,
      buttonText,
    } = styles

    console.log('props in SplashPage: ', this.props);
    // const goToHomePage = () => Actions.homePage({origin: "splashPage"})

    return (
      <Image source={splashBackgroundImage} style={container}>
        <Text style={welcomeText}>Welcome to Rixi!</Text>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor='#E3C7C6'
          style={button}
          onPress={() => this.props.navigation.navigate('TabOneScreenTwo')}
          title="Rixi Home"
        >
          <Text style={buttonText}>Lets get started!</Text>
        </TouchableHighlight>
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          Login with Facebook
        </Icon.Button>
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
