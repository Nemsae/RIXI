import React from 'react'
import {
  // TextInput,
  TouchableHighlight,
  // TouchableOpacity,
  Text,
  View,
  ActivityIndicator, } from 'react-native'
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
      blurbText,
      // button,
      // modalContainer,
      // buttonText,
    } = styles

    console.log('this.props.ocrState: ', this.props.ocrState);
    const { isFetching, ocrText } = this.props.ocrState
    return (
      <View style={container}>
        <Text style={welcomeText}>OCR Page</Text>
        {
          isFetching ?
            <ActivityIndicator size='large' color='#8C9E8E' />
            :
            <Text style={blurbText}>{ocrText}</Text>
        }
        {/* <TouchableHighlight
          activeOpacity={1}
          underlayColor='#E3C7C6'
          style={button}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={buttonText}>Go Back</Text>
        </TouchableHighlight> */}
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    ocrState: state.ocrState,
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
