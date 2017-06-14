import React from 'react'
import { TextInput, TouchableHighlight, TouchableOpacity, Text, View } from 'react-native'
import { connect } from 'react-redux'

import Modal from 'react-native-modal'

import { fetchOCRText } from '../../actions/ocrActions'

/* STYLES */
import styles from './styles'

/** TODO: Take modal out into it's own view
    TODO: Fix textinput to clear default value when clicking on it to type
*/

class HomePage extends React.Component {
  // export default class HomePage extends React.Component {
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
  }

  render () {
    const {
      container,
      modalContainer,
      welcomeText,
      button,
      buttonText,
    } = styles

    return (
      <View style={container}>
        <Text style={welcomeText}>Choose Between</Text>
        <TouchableHighlight style={button}>
          <Text style={buttonText}>CAMERA</Text>
        </TouchableHighlight>
        <Text style={welcomeText}>or</Text>
        <TouchableHighlight style={button} onPress={() =>
          this.setModalVisible(!this.state.modalVisibile)
        }>
        {/* <TouchableHighlight style={button} onPress={() => this.props.fetchOCRText('https://www.w3.org/TR/SVGTiny12/examples/textArea01.png')}> */}
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
            <Text style={buttonText}>Go Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style= {button} onPress={() => {
            this.submitURLforOCR(this.state.urlForFetchingOCR)
          }}>
            <Text style={buttonText}>Submit</Text>
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
