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
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

//  THUNK ACTION CREATOR
//  THUNK ACTION CREATOR
//  THUNK ACTION CREATOR
