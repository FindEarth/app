import {
  FETCHING_PERSON_LIST,
  ERROR_FETCHING,
  SUCCESS_FETCHING,
  SET_LOCATION,
  REFRESHING_PERSON_LIST,
  SUCCESS_REFRESHING,
} from '../constants/ActionTypes'
import { createAction } from 'redux-actions'
import Api from '../constants/Api'

export const fetchingPersonList = createAction(FETCHING_PERSON_LIST)
export const errorFetching = createAction(ERROR_FETCHING)
export const successFetching = createAction(SUCCESS_FETCHING)
export const setLocation = createAction(SET_LOCATION)
export const refreshingPersonList = createAction(REFRESHING_PERSON_LIST)
export const successRefreshing = createAction(SUCCESS_REFRESHING)

export function fetchPersonList(pos) {
  return function(dispatch) {
    const base = `${Api.baseUrl}${Api.personEndpoint}`
    const url = pos ?
      `${base}/near/${pos.long}/${pos.lat}?radius=${Api.radius}` : base
    dispatch(fetchingPersonList())
    fetch(url)
      .then(res => res.json().then(json => {
        dispatch(successFetching(json))
      }))
      .catch(err => {
        dispatch(errorFetching(err.message))
      })
  }
}

export function refreshPersonList(pos) {
  return function(dispatch) {
    const base = `${Api.baseUrl}${Api.personEndpoint}`
    const url = pos ?
      `${base}/near/${pos.long}/${pos.lat}?radius=${Api.radius}` : base
    dispatch(refreshingPersonList())
    fetch(url)
      .then(res => res.json().then(json => {
        dispatch(successRefreshing(json))
      }))
      .catch(err => {
        dispatch(errorFetching(err.message))
      })
  }
}
