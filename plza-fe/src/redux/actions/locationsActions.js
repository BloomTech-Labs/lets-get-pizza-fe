import * as types from '../types'
import API from "../../utils/API";


export const locationLogin = ({username, password}) => dispatch => {
    dispatch({type: types.LOGIN_START, payload: true})
    API.post('auth/location/login', {username, password})
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.location})
            window.location.replace('/')
        })
        .catch(err => {
            dispatch({type: types.LOGIN_FAIL, payload: {error: 'Invalid username or password', isLoading: false}})
        })
}

export const locationRegister = (data) => dispatch => {
    dispatch({type: types.REGISTER_START, payload: true})
    delete data.verify_password
    API.post('auth/location/register', data)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({type: types.REGISTER_SUCCESS, payload: res.data.location})
            window.location.replace('/')
        })
        .catch(err => {
            dispatch({
                type: types.REGISTER_FAIL, 
                payload: {error: 'There was an error with your registration, please try again', isLoading: false}
            })
        })
}