import {
  FETCHING_PERSON_LIST,
  ERROR_FETCHING,
  SUCCESS_FETCHING,
  SET_LOCATION,
} from '../constants/ActionTypes'
import { createAction } from 'redux-actions'
import Api from '../constants/Api'

export const fetchingPersonList = createAction(FETCHING_PERSON_LIST)
export const errorFetching = createAction(ERROR_FETCHING)
export const successFetching = createAction(SUCCESS_FETCHING)
export const setLocation = createAction(SET_LOCATION)

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
