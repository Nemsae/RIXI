import { StackNavigator } from 'react-navigation'

//  Screens
import TabTwoScreenOne from './views/TabTwoScreenOne'
import TabTwoScreenTwo from './views/TabTwoScreenTwo'

const routeConfiguration = {
  TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
}

//  disable header atm
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabTwoScreenOne'
}

export const NavigatorTabTwo = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
