import { StackNavigator } from 'react-navigation'

//  Screens
import SplashPage from '../../components/SplashPage/'
import HomePage from '../../components/HomePage/'
// import TabOneScreenOne from './views/TabOneScreenOne'
// import TabOneScreenTwo from './views/TabOneScreenTwo'

const routeConfiguration = {
  SplashPage: { screen: SplashPage },
  HomePage: { screen: HomePage },
  // TabOneScreenOne: { screen: TabOneScreenOne },
  // TabOneScreenTwo: { screen: TabOneScreenTwo },
}

//  disable header atm
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'SplashPage'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
