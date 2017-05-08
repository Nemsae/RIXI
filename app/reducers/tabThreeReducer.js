import { NavigatorTabThree } from '../routes/tabThree/navigationConfiguration'

export const tabThreeReducer = (state, action) => {
  return NavigatorTabThree.router.getStateForAction(action, state)
}
