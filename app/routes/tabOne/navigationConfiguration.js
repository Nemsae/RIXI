import { StackNavigator } from 'react-navigation'

//  Screens
import SplashPage from '../../components/SplashPage/'
// import TabOneScreenOne from './views/TabOneScreenOne'
import TabOneScreenTwo from './views/TabOneScreenTwo'

const routeConfiguration = {
  SplashPage: { screen: SplashPage },
  // TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
}

//  disable header atm
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'SplashPage'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
