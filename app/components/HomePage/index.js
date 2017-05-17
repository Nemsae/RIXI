import React from 'react'
import { TouchableHighlight, TouchableOpacity, Text, View } from 'react-native'

import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/redditActions'

import styles from './styles'

class HomePage extends React.Component {
// export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Rixi Home'
  }

  render () {
    const {
      container,
      welcomeText,
      button,
      buttonText,
    } = styles
    console.log('000000000000000000000000000000000000000000: ', this.props.fetchPosts)
    return (
      <View style={container}>
        <Text style={welcomeText}>Choose Between</Text>
        <TouchableHighlight style={button} onPress={() => this.props.fetchPosts()}>
          <Text style={buttonText}>CAMERA</Text>
        </TouchableHighlight>
        <Text style={welcomeText}>or</Text>
        <TouchableHighlight style={button} onPress={() => this.props.fetchPosts()}>
          <Text style={buttonText}>URL</Text>
        </TouchableHighlight>
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
    fetchPosts: () => dispatch(fetchPosts()),
  }
}
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
