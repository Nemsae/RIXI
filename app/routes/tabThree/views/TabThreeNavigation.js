import React from 'react'
import { connect } from 'react-redux'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabThree } from '../navigationConfiguration'

import Icon from 'react-native-vector-icons/FontAwesome'

class TabThreeNavigation extends React.Component {
  render () {
    const { dispatch, navigationState } = this.props
    return (
      <NavigatorTabThree
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabThree,
  }
}

export default connect(mapStateToProps)(TabThreeNavigation)
