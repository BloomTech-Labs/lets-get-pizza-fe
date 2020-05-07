import API from "../../utils/API"
import * as types from '../types'

export const userLogin = ({ username, password }) => dispatch => {
    dispatch({ type: types.LOGIN_START, payload: true })
    API.post('/auth/user/login', { username, password })
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.user })
            window.location.replace("/users/dash")
        })
        .catch(err => {
            dispatch({ type: types.LOGIN_FAIL, payload: 'Invalid username or password' })
        })
}

export const userRegister = (data) => dispatch => {
    dispatch({ type: types.REGISTER_START, payload: true })
    delete data.verify_password
    API.post('/auth/user/register', data)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.user })
            window.location.replace("/users/dash")
        })
        .catch(err => {
            dispatch({ 
                type: types.REGISTER_FAIL, 
                payload: {error: 'There was an error with your registration, please try again', isLoading: false} 
            })
        })
}

// Settings
export const userToggleEdit = (event, field) => dispatch => {
    if (event.target.id === field) {
        dispatch({ type: types.TOGGLE_EDIT, payload: '' })
    } else {
        dispatch({ type: types.TOGGLE_EDIT, payload: event.target.id })
    }
}

export const userEditSettings = (event, value) => dispatch => {
    !event.target.name ? (
        dispatch({ type: types.EDIT_SETTINGS, payload: { dietary_preference: value } })
    ) : (
            dispatch({ type: types.EDIT_SETTINGS, payload: { [event.target.name]: value } })
        )
}

export const userSubmitSettings = (event, user) => dispatch => {
    dispatch({ type: types.SUBMIT_SETTINGS_START, payload: true })
    if (event.target.id === 'save') {
        API.put(`/users`, user)
            .then(res => {
                console.log(res.data)
                dispatch({ type: types.SUBMIT_SETTINGS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: types.SUBMIT_SETTINGS_FAIL, payload: false })
            })
    } else {
        dispatch({ type: types.EDIT_CANCEL_CHANGES })
    }
}

export const uploadImage = (formData, setOpen) => dispatch => {
    dispatch({ type: types.IMAGE_UPLOAD_START, payload: true })

    // set header `Content-Type` to `multipart/form-data`
    API.put('/users/images', formData, {headers: {"Content-Type": "multipart/form-data"}})
    .then(res => {
        dispatch({type: types.IMAGE_UPLOAD_SUCCESS, payload: res.data})
        setOpen(false)
    })
    .catch(err => {
        dispatch({
            type: types.IMAGE_UPLOAD_FAIL, 
            payload: {error: 'There was an error uploading your image', isLoading: false}
        })
    })
}

// Location
export const locationByUser = (id) => dispatch => {
    dispatch({ type: types.USER_LOCATION_START, payload: true })
    API.get(`locations/${id}`)
        .then(res => {
            dispatch({ type: types.USER_LOCATION_SUCCESS, payload: res.data.location })
        })
        .catch(err => {
            dispatch({ type: types.USER_LOCATION_FAIL, payload: false })
            console.log(err, 'from error reducer')
        })
}