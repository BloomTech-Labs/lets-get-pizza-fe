import API from "../../utils/API"
import * as types from '../types'

export const locationByUser = (id) => dispatch => {
    dispatch({type: types.LOGIN_START})
    API.get(`locations/${id}`)
    .then(res => {
        dispatch({type: types.USER_LOCATION, payload: res.data})
        console.log(res.data, 'from reducer')
    })
    .catch(err => {
        console.log(err, 'from error reducer')
    })
}