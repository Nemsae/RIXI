import React from 'react'
import { connect } from 'react-redux'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabTwo } from '../navigationConfiguration'

import Icon from 'react-native-vector-icons/FontAwesome'

class TabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Rixi Logs',
    tabBarIcon: ({ tintColor }) => <Icon name="rocket" size={30} color="#900" />
  }

  render () {
    const { dispatch, navigationState } = this.props
    return (
      <NavigatorTabTwo
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
    navigationState: state.tabTwo,
  }
}

export default connect(mapStateToProps)(TabTwoNavigation)
