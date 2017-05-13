import {
  FETCHING_PERSON_LIST,
  SUCCESS_FETCHING,
  ERROR_FETCHING,
  SET_LOCATION,
  REFRESHING_PERSON_LIST,
  SUCCESS_REFRESHING,
  ERROR_REFRESHING,
} from '../constants/ActionTypes'

const initialState = {
  fetching: false,
  successFetching: false,
  errorFetching: false,
  list:[],
  error: '',
  locationDenied: true,
  location: {},
  refreshingList: false,
  errorRefreshing: false,
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
        refreshingList: false,
        error: action.payload,
      }

    case SET_LOCATION:
      return {
        ...state,
        locationDenied: false,
        location: action.payload,
      }

    case REFRESHING_PERSON_LIST:
      return {
        ...state,
        refreshingList: true,
        errorRefreshing: false,
      }

    case SUCCESS_REFRESHING:
      return {
        ...state,
        list: action.payload,
        refreshingList: false,
      }

    case ERROR_REFRESHING:
      return {
        ...state,
        errorRefreshing: true,
        refreshingList: false,
      }

    default:
      return state
  }
}
