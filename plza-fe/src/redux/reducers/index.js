import { combineReducers } from 'redux'
import { userReducer } from './userReducer.js'
import { locationsReducer } from './locationsReducer'

export default combineReducers({
    user: userReducer,
    location: locationsReducer
})