import { FETCHING_DATA } from '../config/saga/sagaConstants'
// import getPeople from '../config/api.js'

export function fetchData() {
  return {
    type: FETCHING_DATA
  }
}
