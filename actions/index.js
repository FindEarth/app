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
  CREATING_NEW_PERSON,
  SUCCESS_CREATING_NEW_PERSON,
  ERROR_CREATING_NEW_PERSON,
  CLEAN_PERSON_CREATE_RESPONSE,
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

export const creatingNewPerson = createAction(CREATING_NEW_PERSON)
export const successCreatingNewPerson = createAction(SUCCESS_CREATING_NEW_PERSON)
export const errorCreatingNewPerson = createAction(ERROR_CREATING_NEW_PERSON)
export const cleanPersonCreateResponse = createAction(CLEAN_PERSON_CREATE_RESPONSE)

export function fetchPersonList(pos) {
  return function(dispatch) {
    const base = `${Api.endpoints.baseUrl}${Api.endpoints.person}`
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
    const base = `${Api.endpoints.baseUrl}${Api.endpoints.person}`
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
    const base = `${Api.endpoints.baseUrl}${Api.endpoints.person}`
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

export function createPerson(person) {
  return function(dispatch, getState) {
    const url = `${Api.endpoints.baseUrl}${Api.endpoints.personRequest}`
    dispatch(creatingNewPerson())
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...person,
      }),
    })
      .then(res => res.json().then(json => {
        dispatch(successCreatingNewPerson())
      }))
      .catch(err => {
        dispatch(errorCreatingNewPerson())
        console.log('Error creating New Person', err.message)
      })
  }
}
