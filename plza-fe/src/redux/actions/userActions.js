import API from "../../utils/API"
import * as types from '../types'

// Auth
export const userLogin = ({ username, password }, history) => dispatch => {
    dispatch({ type: types.LOGIN_START })
    API.post('/auth/user/login', { username, password })
        .then(res => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.user })
            history.push('/users/dash')
        })
        .catch(err => {
            dispatch({ type: types.LOGIN_FAIL, payload: false })
        })
}

export const userRegister = (data, history) => dispatch => {
    dispatch({ type: types.REGISTER_START })
    delete data.verify_password
    API.post('/auth/user/register', data)
        .then(res => {
            console.log(res)
            // localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.user })
            history.push('/users/dash')
        })
        .catch(err => {
            dispatch({ type: types.REGISTER_FAIL, payload: false })
        })

}

// Settings
export const userToggleEdit = (event, field) => dispatch => {
    // console.log(event.target.id, "[[event target id]]")
    // console.log(field, "[[field]]")
    if (event.target.id === field) {
        dispatch({ type: types.TOGGLE_EDIT, payload: '' })
    } else {
        dispatch({ type: types.TOGGLE_EDIT, payload: event.target.id })
    }
}

export const userEditSettings = (event, value) => dispatch => {
    // console.log("[[event]]", event.target.name)
    // console.log("[[value]]", value)
    !event.target.name ? (
        dispatch({ type: types.EDIT_SETTINGS, payload: { dietary_preference: value } })
    ) : (
            dispatch({ type: types.EDIT_SETTINGS, payload: { [event.target.name]: value } })
        )
}

export const userSubmitSettings = (event, user) => dispatch => {
    dispatch({ type: types.SUBMIT_SETTINGS_START })
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