import { TabNavigator } from 'react-navigation'

import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'

const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
}

const tabBarConfiguration = {
  //  Put other config options here
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#8C9E8E',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#D2E1D4',
      // backgroundColor: '#99B09C',
    },
    pressColor: 'pink',
    pressOpacity: 1,
    indicatorStyle: {
      backgroundColor: '#8C9E8E',
    },
    // activeBackgroundColor: 'black',
    // inactiveBackgroundColor: 'white',
    // activeTintColor: '#EFF5E5',
    // inactiveTintColor: '#D2E1D4',
    // activeBackgroundColor: '#D2E1D4',
    // inactiveBackgroundColor: '#EFF5E5',
  },
  // order: [
  //   TabThreeNavigation,
  //   TabTwoNavigation,
  //   TabOneNavigation,
  // ]
}

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)
