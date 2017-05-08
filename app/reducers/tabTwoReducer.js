import { NavigatorTabTwo } from '../routes/tabTwo/navigationConfiguration'

export const tabTwoReducer = (state, action) => {
  return NavigatorTabTwo.router.getStateForAction(action, state)
}
