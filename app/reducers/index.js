import { combineReducers } from 'redux'

import { tabBarReducer } from './tabBarReducer'
import { tabOneReducer } from './tabOneReducer'
import { tabTwoReducer } from './tabTwoReducer'
import { tabThreeReducer } from './tabThreeReducer'

const rootReducer = combineReducers({
  tabBar: tabBarReducer,
  tabOne: tabOneReducer,
  tabTwo: tabTwoReducer,
  tabThree: tabThreeReducer,
})

export default rootReducer
