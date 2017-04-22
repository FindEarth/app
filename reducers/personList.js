import {
  FETCHING_PERSON_LIST,
  SUCCESS_FETCHING,
  ERROR_FETCHING,
  SET_LOCATION,
} from '../constants/ActionTypes'

const initialState = {
  fetching: false,
  successFetching: false,
  errorFetching: false,
  list:[],
  error: '',
  locationDenied: true,
  location: {},
}

export default function personList(state = initialState, action) {
  switch (action.type) {

    case FETCHING_PERSON_LIST:
      return {
        ...state,
        successFetching: false,
        errorFetching: false,
        fetching: true,
      }

    case SUCCESS_FETCHING:
      return {
        ...state,
        fetching: false,
        successFetching: true,
        list: action.payload,
      }

    case ERROR_FETCHING:
      return {
        ...state,
        fetching: false,
        errorFetching: true,
        error: action.payload,
      }

    case SET_LOCATION:
      return {
        ...state,
        locationDenied: false,
        location: action.payload,
      }

    default:
      return state
  }
}
