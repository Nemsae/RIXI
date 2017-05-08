import { StackNavigator } from 'react-navigation'

//  Screens
import TabThreeScreenOne from '../../components/TabThree/TabThreeScreenOne'
import TabThreeScreenTwo from '../../components/TabThree/TabThreeScreenTwo'

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
