import API from "../../utils/API"
import * as types from '../types'

export const userLogin = ({username, password}, history) => dispatch => {
    dispatch({type: types.LOGIN_START, payload: true})
    API.post('/auth/user/login', {username, password})
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.user})
            history.push('/users/dash')
        })
        .catch(err => {
            dispatch({type: types.LOGIN_FAIL, payload: false})
        })
}

export const userRegister = (data, history) => dispatch => {
    dispatch({type: types.REGISTER_START, payload: true})
    delete data.verify_password
    API.post('/auth/user/register', data)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({type: types.REGISTER_SUCCESS, payload: res.data.user})
            history.push('/users/dash')
        })
        .catch(err => {
            dispatch({type: types.REGISTER_FAIL, payload: false})
        })
}

export const locationByUser = (id) => dispatch => {
    dispatch({type: types.USER_LOCATION_START, payload: true})
    API.get(`locations/${id}`)
    .then(res => {
        dispatch({type: types.USER_LOCATION_SUCCESS, payload: res.data.location})
    })
    .catch(err => {
        dispatch({type: types.USER_LOCATION_FAIL, payload: false})
        console.log(err, 'from error reducer')
    })
}