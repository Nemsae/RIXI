import fetch from 'fetch-everywhere'
require('dotenv').config({ silent: true})
//  USER INTERACTIONS
//  USER INTERACTIONS
//  USER INTERACTIONS

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
//  To Refresh a subreddit
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

//  NETWORK REQUESTS
//  NETWORK REQUESTS
//  NETWORK REQUESTS

export const REQUEST_POSTS = 'REQUEST_POSTS'
//  fetching posts for a subreddit
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
//  when network request comes in, dispatch this action
function receivePosts(subreddit, json) {
  // console.log('0000000000: ', json.data.children)
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json,
    // posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

//  THUNK ACTION CREATOR
//  THUNK ACTION CREATOR
//  THUNK ACTION CREATOR
export function fetchPosts(subreddit) {
  return function(dispatch) {
    console.log('subreddit: ', subreddit);
    dispatch(requestPosts(subreddit))
    return fetch(`https://wwww.reddit.com/r/${subreddit}.json`)
      .then(response => {
        console.log('response: ', response);
        return response.json
      })
      .then(json =>
        dispatch(receivePosts(subreddit, json))
      )
      .catch((error) => {
        console.log('fetchPosts error.', error.message)
        throw error;
      })
  }
}

// const fetchPosts = reddit => dispatch => {
//   dispatch(requestPosts(reddit))
//   return fetch(`https://www.reddit.com/r/${reddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(reddit, json)))
// }

// export function fetchPosts(subreddit) {
//   return function(dispatch) {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://wwww.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json
//         // error => console.log('An error occured.', error)
//       )
//       .then(json =>
//         dispatch(receivePosts(subreddit, json))
//       )
//       .catch((error) => {
//         console.log('fetchPosts error.', error.message)
//         throw error;
//       })
//   }
// }
