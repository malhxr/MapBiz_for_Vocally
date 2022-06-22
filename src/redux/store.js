import { createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  userReducer  from './reducers'

const rootReducers = combineReducers ({userReducer})

export const store = createStore(rootReducers , applyMiddleware(thunk))