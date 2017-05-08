import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import rootReducer from './reducers/index'

const middleware = () => {
  return applyMiddleware(promiseMiddleware())
}

export default createStore(
  rootReducer,
  middleware(),
)
