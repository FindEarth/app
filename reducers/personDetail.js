import {
  ON_PERSON_SELECTED,
  REFRESHING_PERSON_DETAIL,
  SUCCESS_REFRESHING_PERSON,
  ERROR_REFRESHING_PERSON,
} from '../constants/ActionTypes'

const initialState = {
  personSelected: {},
  refreshingPerson: false,
  errorRefreshingPerson: false,
}

export default function personDetail(state = initialState, action) {
  switch (action.type) {

    case ON_PERSON_SELECTED:
      return {
        ...state,
        personSelected: action.payload,
        errorRefreshingPerson: false,
      }

    case REFRESHING_PERSON_DETAIL:
      return {
        ...state,
        refreshingPerson: true,
        errorRefreshingPerson: false,
      }

    case SUCCESS_REFRESHING_PERSON:
      return {
        ...state,
        personSelected: action.payload,
        refreshingPerson: false,
      }

    case ERROR_REFRESHING_PERSON:
      return {
        ...state,
        errorRefreshingPerson: true,
        refreshingPerson: false,
      }

    default:
      return state
  }
}
