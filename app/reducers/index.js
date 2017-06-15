import { combineReducers } from 'redux'

import { tabBarReducer } from './tabBarReducer'
import { tabOneReducer } from './tabOneReducer'
import { tabTwoReducer } from './tabTwoReducer'
import { tabThreeReducer } from './tabThreeReducer'
import { tabFourReducer } from './tabFourReducer'
import { ocrReducer } from './ocrReducer'
// import { postsBySubreddit, selectedSubreddit } from './subredditReducer'

const rootReducer = combineReducers({
  tabBar: tabBarReducer,
  tabOne: tabOneReducer,
  tabTwo: tabTwoReducer,
  tabThree: tabThreeReducer,
  tabFour: tabFourReducer,
  ocrState: ocrReducer,
  // postsBySubreddit: postsBySubreddit,
  // selectedSubreddit: selectedSubreddit,
})

export default rootReducer
