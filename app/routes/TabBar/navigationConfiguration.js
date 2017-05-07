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
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)
