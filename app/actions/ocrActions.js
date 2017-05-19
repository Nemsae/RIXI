import fetch from 'fetch-everywhere'
// require('../../.env').config({ silent: true})
//  USER INTERACTIONS
//  USER INTERACTIONS
//  USER INTERACTIONS

// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
//
// export function selectSubreddit(subreddit) {
//   return {
//     type: SELECT_SUBREDDIT,
//     subreddit
//   }
// }
//
// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
// //  To Refresh a subreddit
// export function invalidateSubreddit(subreddit) {
//   return {
//     type: INVALIDATE_SUBREDDIT,
//     subreddit
//   }
// }
//
// //  NETWORK REQUESTS
// //  NETWORK REQUESTS
// //  NETWORK REQUESTS
//
// export const REQUEST_POSTS = 'REQUEST_POSTS'
// //  fetching posts for a subreddit
// function requestPosts(subreddit) {
//   return {
//     type: REQUEST_POSTS,
//     subreddit
//   }
// }
//
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// //  when network request comes in, dispatch this action
// function receivePosts(subreddit, json) {
//   // console.log('0000000000: ', json.data.children)
//   return {
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json,
//     // posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }
// const RapidAPI = require('rapidapi-connect');
// const rapid = new RapidAPI("undefined", *KEY*);
//
// rapid.call('MicrosoftComputerVision', 'ocr', {
// 	'subscriptionKey': '3d725f94f4274199a9e2095440054f75',
// 	'image': 'https://www.w3.org/TR/SVGTiny12/examples/textArea01.png',
// 	'language': '',
// 	'detectOrientation': ''
//
// }).on('success', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/
// }).on('error', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/
// });

export function fetchOcrText(imgURL) {
  // let microsoftVisionURL = 'wtf'
  let request = new Request('https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk&detectOrientation =true', {
    method: 'POST',
    headers: new Headers({
      // 'subscriptionKey': '3d725f94f4274199a9e2095440054f75',
    	// 'url': 'https://www.w3.org/TR/SVGTiny12/examples/textArea01.png',
    	// 'language': '',
    	// 'detectOrientation': '',
      'Content-Type': 'application/json',
      'Host': 'westus.api.cognitive.microsoft.com',
      'Ocp-Apim-Subscription-Key': '3d725f94f4274199a9e2095440054f75'
      // 'Ocp-Apim-Subscription-Key': process.env.Ocp_Apim_Subscription_Key
    }),
    body: '{"url": "https://www.w3.org/TR/SVGTiny12/examples/textArea01.png"}'
  })
  return function(dispatch) {
    // dispatch()
    return fetch(request)
      .then(response => {
        console.log('response: ', response);
        return response
      })
      .catch((error) => {
        console.log('fetchOcrText error.', error.message)
        throw error;
      })
  }
}

// exports.getDescription = function(imgUrl, cb) {
//   let url = 'https://api.projectoxford.ai/vision/v1.0/ocr?language=en&detectOrientation=true';
//   axios.post(url, imgUrl, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Ocp-Apim-Subscription-Key': process.env.Ocp_Apim_Subscription_Key
//     }
//   })
//     .then((res) => {
//       const { regions } = res.data
//       const { lines } = regions[0]
//       let newStr;
//       let arr = []
//         lines.forEach((line) => {
//           let newArr  = line.words
//           newArr.forEach((word) => {
//             arr.push(word.text)
//           })
//         })
//       let imageStr = arr.join(' ')
//       cb(null, imageStr);
//       exports.write(imageStr)
//     })
//     .catch((err) => {
//       cb(err)
//     })
// }

// export function fetchPosts(subreddit) {
//   return function(dispatch) {
//     console.log('subreddit: ', subreddit);
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://wwww.reddit.com/r/${subreddit}.json`)
//       .then(response => {
//         console.log('response: ', response);
//         return response.json
//       })
//       .then(json =>
//         dispatch(receivePosts(subreddit, json))
//       )
//       .catch((error) => {
//         console.log('fetchPosts error.', error.message)
//         throw error;
//       })
//   }
// }

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
