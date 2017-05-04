import { createStore, applyMiddleware } from 'redux'
import app from './reducers'

// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import dataSaga from './config/saga/saga.js'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  // let store = createStore(app, applyMiddleware(thunk))
  const store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}
