import { applyMiddleware, createStore } from 'redux'
// import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

// import { selectSubreddit, fetchPosts } from './actions/redditActions'
import rootReducer from './reducers/index'

const loggerMiddleware = createLogger()

const middleware = () => {
  return applyMiddleware(
    thunkMiddleware,  //  lets us dispatch() functions
    loggerMiddleware  //  logs actions
  )
}

const store = createStore(
  rootReducer,
  middleware(),
)

// store.dispatch(selectSubreddit('reactjs'))
// store.dispatch(fetchPosts('reactjs'))
//   .then(() =>
//     console.log(store.getState())
//   )
//   .catch((error) => {
//     console.log('API Error, probably fetchPosts')
//     alert(error.message)
//   })

export default store;
