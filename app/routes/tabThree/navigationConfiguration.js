import { StackNavigator } from 'react-navigation'

//  Screens
import TabThreeScreenOne from './views/TabThreeScreenOne'
import TabThreeScreenTwo from './views/TabThreeScreenTwo'

const routeConfiguration = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
}

//  disable header atm
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabThreeScreenOne'
}

export const NavigatorTabThree = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
