import React from 'react'
import {
  // TextInput,
  TouchableHighlight,
  // TouchableOpacity,
  Text,
  View } from 'react-native'
import { connect } from 'react-redux'


/* STYLES */
import styles from './styles'

/** TODO:
*/

class OCRPage extends React.Component {
  // export default class OCRPage extends React.Component {
  static navigationOptions = {
    title: 'OCR Page'
  }

  state = {
  }

  render () {
    const {
      container,
      welcomeText,
      button,
      // modalContainer,
      buttonText,
    } = styles

    return (
      <View style={container}>
        <Text style={welcomeText}>OCRPage</Text>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor='#E3C7C6'
          style={button}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={buttonText}>Go Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    // appData: state.appData,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // fetchOCRText: (url) => dispatch(fetchOCRText(url)),
  }
}
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OCRPage)
