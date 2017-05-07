import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

//  NAVIGATION
import { NavigatorTabOne } from './routes/tabOne/navigationConfiguration'
import { NavigatorTabTwo } from './routes/tabTwo/navigationConfiguration'
import { NavigatorTabThree } from './routes/tabThree/navigationConfiguration'
import { TabBar } from './routes/tabBar/navigationConfiguration'

//  MIDDLEWARE
const middleware = () => {
  return applyMiddleware(logger())
}

export default createStore(
  combineReducers({
    tabBar: (state, action) => TabBar.router.getStateForAction(action, state),
    tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action, state),
    tabTwo: (state, action) => NavigatorTabTwo.router.getStateForAction(action, state),
    tabThree: (state, action) => NavigatorTabThree.router.getStateForAction(action, state),
  }),
  middleware(),
)

// import { createStore, applyMiddleware } from 'redux'
// import app from './reducers'
//
// // for THUNK
// // import thunk from 'redux-thunk'
//
// //  for REDUX-SAGA
// // import createSagaMiddleware from 'redux-saga'
// // import dataSaga from './config/saga/saga.js'
// // const sagaMiddleware = createSagaMiddleware()
//
// import promiseMiddleware from 'redux-promise-middleware'
//
// export default function configureStore() {
//   // let store = createStore(app, applyMiddleware(thunk))
//   let store = createStore(app, applyMiddleware(promiseMiddleware()))
//   return store
// }
