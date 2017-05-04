import { createStore, applyMiddleware } from 'redux'
import app from './reducers'

// for THUNK
// import thunk from 'redux-thunk'

//  for REDUX-SAGA
// import createSagaMiddleware from 'redux-saga'
// import dataSaga from './config/saga/saga.js'
// const sagaMiddleware = createSagaMiddleware()

import promiseMiddleware from 'redux-promise-middleware'

export default function configureStore() {
  // let store = createStore(app, applyMiddleware(thunk))
  let store = createStore(app, applyMiddleware(promiseMiddleware()))
  return store
}
