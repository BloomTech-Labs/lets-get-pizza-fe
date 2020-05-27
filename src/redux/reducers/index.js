import { combineReducers } from 'redux'
import { userReducer } from './userReducer.js'
import { locationsReducer } from './locationsReducer'
import { friendReducer } from './friendReducer.js'

export default combineReducers({
    user: userReducer,
    location: locationsReducer,
    friend: friendReducer
})