import { combineReducers } from 'redux'
import { userReducer } from '../reducers/userReducer.js'
import {locationReducer} from './locationReducer.js'

export default combineReducers({
    user: userReducer,
    location: locationReducer
})