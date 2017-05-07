import React from 'react'
import { connect } from 'react-redux'

import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from '../navigationConfiguration'

class TabBarNavigation extends React.Component {
  render () {
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
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
    navigationState: state.tabBar,
  }
}

export default connect(mapStateToProps)(TabBarNavigation)
