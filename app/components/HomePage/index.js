import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

import { connect } from 'react-redux'
// import { fetchData } from '../../actions/dataActions'

import styles from './styles'

const HomePage = (props) => {
  const {
    container,
    welcomeText,
    button,
    buttonText,
  } = styles

  return (
    <View style={container}>
      <Text style={welcomeText}>Choose Between</Text>
      <TouchableHighlight style={button} onPress={() => props.fetchData()}>
        <Text style={buttonText}>CAMERA</Text>
      </TouchableHighlight>
      <Text style={welcomeText}>OR</Text>
      <TouchableHighlight style={button} onPress={() => props.fetchData()}>
        <Text style={buttonText}>URL</Text>
      </TouchableHighlight>
      <Text style={buttonText}>{this.props}</Text>
    </View>
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
)(HomePage)
