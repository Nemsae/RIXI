import { StackNavigator } from 'react-navigation'

//  Screens
import RixiCamera from '../../components/RixiCamera/'
import TabFourScreenOne from '../../components/TabFour/TabFourScreenOne'
import TabFourScreenTwo from '../../components/TabFour/TabFourScreenTwo'

const routeConfiguration = {
  RixiCamera: { screen: RixiCamera },
  TabFourScreenOne: { screen: TabFourScreenOne },
  TabFourScreenTwo: { screen: TabFourScreenTwo },
}

//  disable header atm
const stackNavigatorConfiguration = {
  headerMode: 'none',
  // initialRouteName: 'TabFourScreenOne'
  initialRouteName: 'RixiCamera'
}

export const NavigatorTabFour = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
