import { StackNavigator } from 'react-navigation'

//  Screens
// import TabTwoScreenOne from '../../components/TabTwo/TabTwoScreenOne'
import TabTwoScreenTwo from '../../components/TabTwo/TabTwoScreenTwo'
import OCRPage from '../../components/OCRPage/'

const routeConfiguration = {
  OCRPage: { screen: OCRPage },
  // TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
}

//  disable header atm
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabTwoScreenOne'
}

export const NavigatorTabTwo = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
