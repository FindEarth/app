import {
  FETCHING_PERSON_LIST,
  ERROR_FETCHING,
  SUCCESS_FETCHING,
  SET_LOCATION,
  REFRESHING_PERSON_LIST,
  SUCCESS_REFRESHING,
  ERROR_REFRESHING,
  FILTER_PERSON_LIST,
  CLEAR_FILTER_PERSON_LIST,
  ON_PERSON_SELECTED,
  REFRESHING_PERSON_DETAIL,
  SUCCESS_REFRESHING_PERSON,
  ERROR_REFRESHING_PERSON,
} from '../constants/ActionTypes'
import { createAction } from 'redux-actions'
import Api from '../constants/Api'

export const fetchingPersonList = createAction(FETCHING_PERSON_LIST)
export const errorFetching = createAction(ERROR_FETCHING)
export const successFetching = createAction(SUCCESS_FETCHING)
export const setLocation = createAction(SET_LOCATION)
export const refreshingPersonList = createAction(REFRESHING_PERSON_LIST)
export const successRefreshing = createAction(SUCCESS_REFRESHING)
export const errorRefreshing = createAction(ERROR_REFRESHING)
export const filterPersonList = createAction(FILTER_PERSON_LIST)
export const clearFilterPersonList = createAction(CLEAR_FILTER_PERSON_LIST)

export const onPersonSelected = createAction(ON_PERSON_SELECTED)
export const refreshingPersonDetail = createAction(REFRESHING_PERSON_DETAIL)
export const successRefreshingPerson = createAction(SUCCESS_REFRESHING_PERSON)
export const errorRefreshingPerson = createAction(ERROR_REFRESHING_PERSON)

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
        console.log('Error fetching Person list', err.message)
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
        dispatch(errorRefreshing(err.message))
        console.log('Error refreshing Person list', err.message)
      })
  }
}

export function onSearchPersonList(str) {
  return function(dispatch, getState) {
    const list = getState().personList.list
    const filteredList = list.filter((person) => (
      person.name.toLowerCase().includes(str.toLowerCase())))
    dispatch(filterPersonList(filteredList))
  }
}

export function refreshPersonDetail(id) {
  return function(dispatch, getState) {
    const id = getState().personDetail.personSelected._id
    const base = `${Api.baseUrl}${Api.personEndpoint}`
    const url = `${base}/${id}`
    dispatch(refreshingPersonDetail())
    fetch(url)
      .then(res => res.json().then(json => {
        dispatch(successRefreshingPerson(json))
      }))
      .catch(err => {
        dispatch(errorRefreshingPerson(err.message))
        console.log('Error refreshing Person detail', err.message)
      })
  }
}
