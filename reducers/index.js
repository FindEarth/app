import { combineReducers } from 'redux'
import personList from './personList'
import personDetail from './personDetail'

const rootReducer = combineReducers({
  personList,
  personDetail,
})

export default rootReducer
