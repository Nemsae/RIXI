import { NavigatorTabFour } from '../routes/tabFour/navigationConfiguration'

export const tabFourReducer = (state, action) => {
  return NavigatorTabFour.router.getStateForAction(action, state)
}
