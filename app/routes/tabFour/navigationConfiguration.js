import { StackNavigator } from 'react-navigation'

//  Screens
// import Camera from '../../components/Camera/'
import TabFourScreenOne from '../../components/TabFour/TabFourScreenOne'
import TabFourScreenTwo from '../../components/TabFour/TabFourScreenTwo'

const routeConfiguration = {
  // Camera: { screen: Camera },
  TabFourScreenOne: { screen: TabFourScreenOne },
  TabFourScreenTwo: { screen: TabFourScreenTwo },
}

//  disable header atm
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabFourScreenOne'
  // initialRouteName: 'Camera'
}

export const NavigatorTabFour = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
