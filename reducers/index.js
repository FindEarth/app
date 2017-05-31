import { combineReducers } from 'redux'
import personList from './personList'
import personDetail from './personDetail'
import personCreate from './personCreate'

const rootReducer = combineReducers({
  personList,
  personDetail,
  personCreate,
})

export default rootReducer
