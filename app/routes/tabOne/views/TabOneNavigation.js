import React from 'react'
import { connect } from 'react-redux'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOne } from '../navigationConfiguration'

import Icon from 'react-native-vector-icons/FontAwesome'

class TabOneNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Rixi Home',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor } />,
    header: null,
    headerTitleStyle: {

    },
    headerStyle: {

    },
    headerTintColor: 'black',
  }

  render () {
    const { dispatch, navigationState } = this.props
    return (
      <NavigatorTabOne
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
    navigationState: state.tabOne,
  }
}

export default connect(mapStateToProps)(TabOneNavigation)
