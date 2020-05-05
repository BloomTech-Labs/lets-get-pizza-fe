import { combineReducers } from 'redux'
import { userReducer } from '../reducers/userReducer.js'

export default combineReducers({
    user: userReducer
})