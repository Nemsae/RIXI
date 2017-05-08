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
    headerTintColor: 'black',
    // activeTintColor: 'white',
    // inactiveTintColor: 'black',
    // activeBackgroundColor: 'black',
    // inactiveBackgroundColor: 'white',
    // activeTintColor: '#EFF5E5',
    // inactiveTintColor: '#D2E1D4',
    // activeBackgroundColor: '#D2E1D4',
    // inactiveBackgroundColor: '#EFF5E5',
  }
}

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)
