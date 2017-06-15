import React from 'react'
import { connect } from 'react-redux'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabFour } from '../navigationConfiguration'

import Icon from 'react-native-vector-icons/FontAwesome'

class TabFourNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab Four',
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
      <NavigatorTabFour
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
    navigationState: state.tabFour,
  }
}

export default connect(mapStateToProps)(TabFourNavigation)
