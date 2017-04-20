import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = [ReduxThunk]
const enhancer = [applyMiddleware(...middlewares)]
const initialState = {}

export default createStore(
  rootReducer,
  initialState,
  ...enhancer
)
