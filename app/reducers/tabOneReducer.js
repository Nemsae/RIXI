import { NavigatorTabOne } from '../routes/tabOne/navigationConfiguration'

export const tabOneReducer = (state, action) => {
  return NavigatorTabOne.router.getStateForAction(action, state)
}
