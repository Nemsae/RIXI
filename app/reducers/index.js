import { combineReducers } from 'redux'

import { tabBarReducer } from './tabBarReducer'
import { tabOneReducer } from './tabOneReducer'
import { tabTwoReducer } from './tabTwoReducer'
import { tabThreeReducer } from './tabThreeReducer'
// import { postsBySubreddit, selectedSubreddit } from './subredditReducer'

const rootReducer = combineReducers({
  tabBar: tabBarReducer,
  tabOne: tabOneReducer,
  tabTwo: tabTwoReducer,
  tabThree: tabThreeReducer,
  // postsBySubreddit: postsBySubreddit,
  // selectedSubreddit: selectedSubreddit,
})

export default rootReducer
