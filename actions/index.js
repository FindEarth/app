import {
  FETCHING_PERSON_LIST,
  ERROR_FETCHING,
  SUCCESS_FETCHING,
} from '../constants/ActionTypes'
import { createAction } from 'redux-actions'
import Api from '../constants/Api'

export const fetchingPersonList = createAction(FETCHING_PERSON_LIST)
export const errorFetching = createAction(ERROR_FETCHING)
export const successFetching = createAction(SUCCESS_FETCHING)

export function fetchPersonList() {
  return function(dispatch) {
    const url = `${Api.baseUrl}${Api.personEndpoint}`
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
