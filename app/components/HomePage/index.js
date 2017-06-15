import React from 'react'
import { TextInput, TouchableHighlight, TouchableOpacity, Text, View } from 'react-native'
import { connect } from 'react-redux'

import Modal from 'react-native-modal'

import { fetchOCRText } from '../../actions/ocrActions'

/* STYLES */
import styles from './styles'

/** TODO: Take modal out into its own view
    TODO: Take camera out into its own view
    TODO: Understand why nagivate(OCRPage) doesn't work. Take HACK out
    TODO: Fix textinput to clear default value when clicking on it to type
*/

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Rixi Home'
  }

  state = {
    isModalVisible: false,
    urlForFetchingOCR: 'Paste the URL',
  }

  setModalVisible = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  submitURLforOCR = (url) => {
    this.props.fetchOCRText(url)
    this.setState({ isModalVisible: !this.state.isModalVisible })

    //  HACK jump to tabe 2 instead of navigating directly to OCRPage
    // this.props.navigation.navigate('OCRPage')
    this.props.navigation.dispatch({
      type: 'JUMP_TO_TAB',
      payload: { index: 1 }
    })
  }

  render () {
    const {
      container,
      modalContainer,
      welcomeText,
      button,
      buttonText,
    } = styles

    // const tempURL = 'http://static4.businessinsider.com/image/52618eec69bedd5e4ea8f3ff/etsys-product-manager-was-out-on-a-date-when-his-wife-got-this-hilarious-accidental-text-from-the-babysitter.jpg'
    // const tempURL = 'https://i.stack.imgur.com/vrkIj.png'
    // const tempURL = 'https://www.w3.org/TR/SVGTiny12/examples/textArea01.png'
    const tempURL = 'http://love.portalromantico.com/items/lovetext-299.jpg'

    return (
      <View style={container}>
        <Text style={welcomeText}>Choose Between</Text>
        {/* <TouchableHighlight style={button} onPress={() =>

        }> */}
        <TouchableHighlight style={button}>
          <Text style={buttonText}>CAMERA</Text>
        </TouchableHighlight>
        <Text style={welcomeText}>or</Text>
        <TouchableHighlight style={button} onPress={() =>
          this.setModalVisible(!this.state.modalVisibile)
        }>
          <Text style={buttonText}>URL</Text>
        </TouchableHighlight>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={modalContainer}>
            <TextInput
              style={{
                // height: '50%',
                width: '90%',
                borderColor: 'white',
                color: '#788889',
                borderWidth: 5,
                textAlign: 'center'
              }}
              onChangeText={(text) => this.setState({urlForFetchingOCR: text})}
              selectTextOnFocus={true}
              // placeholder='Hi'
              // placeholderTextColor='red'
              value={this.state.urlForFetchingOCR}
            />
            <TouchableHighlight style= {button} onPress={() => {
              this.setModalVisible(!this.state.isModalVisible)
            }}>
              <Text style={buttonText}>Cancel OCR</Text>
            </TouchableHighlight>
            <TouchableHighlight style= {button} onPress={() => {
              this.submitURLforOCR(tempURL)
              // this.submitURLforOCR(this.state.urlForFetchingOCR)
            }}>
              <Text style={buttonText}>Get OCR</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'#E3C7C6',
            marginTop:20
          }}
        >
          <Text>{'Go Back'}</Text>
        </TouchableOpacity>
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
    fetchOCRText: (url) => dispatch(fetchOCRText(url)),
  }
}
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
