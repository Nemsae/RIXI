import React from 'react'
import { Modal, TouchableHighlight, TouchableOpacity, Text, View } from 'react-native'
import { connect } from 'react-redux'


import { fetchOcrText } from '../../actions/ocrActions'

/* STYLES */
import styles from './styles'

//  TODO: Take modal out into it's own view

class HomePage extends React.Component {
  // export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Rixi Home'
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
          {/* <TouchableHighlight style={button} onPress={() => this.props.fetchPosts()}> */}
          <Text style={buttonText}>CAMERA</Text>
        </TouchableHighlight>
        <Text style={welcomeText}>or</Text>
        <TouchableHighlight style={button} onPress={() =>
          this.setModalVisible(!this.state.modalVisibile)
        }>
        {/* <TouchableHighlight style={button} onPress={() => this.props.fetchOcrText('https://www.w3.org/TR/SVGTiny12/examples/textArea01.png')}> */}
        <Text style={buttonText}>URL</Text>
      </TouchableHighlight>

      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={modalContainer}>
            <View>
              <Text>Button should be here</Text>

              <TouchableHighlight style= {button} onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
              <Text style={buttonText}>Hide Modal</Text>
            </TouchableHighlight>

          </View>
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
        {/* <Text style={buttonText}>{this.props}</Text> */}
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
    fetchOcrText: (url) => dispatch(fetchOcrText(url)),
  }
}
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
