//  IMPORT OCR action constants
import { REQUEST_OCR, RECEIVE_OCR } from '../actions/ocrActions'

let initialState = {
  ocrText: '',
  isFetching: false,
  timeStamp: ''
}

export const ocrReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_OCR:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_OCR:
      return Object.assign({}, state, {
        isFetching: false,
        ocrText: action.payload,
        timeStamp: action.receivedAt
      })
    default:
      return state
  }
}
