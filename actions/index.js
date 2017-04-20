import {
  FETCHING_PERSON_LIST,
  ERROR_FETCHING,
  SUCCESS_FETCHING,
} from '../constants/ActionTypes'
import { createAction } from 'redux-actions'
import Api from '../constants/Api'
import trae from 'trae'

export const fetchingPersonList = createAction(FETCHING_PERSON_LIST)
export const errorFetching = createAction(ERROR_FETCHING)
export const successFetching = createAction(SUCCESS_FETCHING)

export function fetchPersonList() {
  return function(dispatch) {
    dispatch(fetchingPersonList())
    const url = `${Api.baseUrl}${Api.personEndpoint}`
    trae.get(url)
      .then((response) => {
        dispatch(successFetching(response))
      })
      .catch((err) => {
        dispatch(errorFetching(err.message))
      })
  }
}
