import {
  CREATING_NEW_PERSON,
  SUCCESS_CREATING_NEW_PERSON,
  ERROR_CREATING_NEW_PERSON,
  CLEAN_PERSON_CREATE_RESPONSE,
} from '../constants/ActionTypes'

const initialState = {
  creatingPerson: false,
  errorCreatingPerson: false,
  successCreatingPerson: false,
}

export default function personCreat(state = initialState, action) {
  switch (action.type) {

    case CREATING_NEW_PERSON:
      return {
        ...state,
        creatingPerson: true,
        errorCreatingPerson: false,
        successCreatingPerson: false,
      }

    case SUCCESS_CREATING_NEW_PERSON:
      return {
        ...state,
        creatingPerson: false,
        successCreatingPerson: true,
        errorCreatingPerson: false,
      }

    case ERROR_CREATING_NEW_PERSON:
      return {
        ...state,
        errorCreatingPerson: true,
        creatingPerson: false,
        successCreatingPerson: false,
      }

    case CLEAN_PERSON_CREATE_RESPONSE:
      return {
        ...state,
        errorCreatingPerson: false,
        successCreatingPerson: false,
      }

    default:
      return state
  }
}
