import { FETCH_DATA } from '../config/constants'
import getPeople from '../config/api.js'

export function fetchData() {
  return {
    type: FETCH_DATA,
    payload: getPeople()
  }
}
