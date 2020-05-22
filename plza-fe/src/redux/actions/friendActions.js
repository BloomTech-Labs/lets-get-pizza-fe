import * as types from '../types/friendTypes'
import API from '../../utils/API'

export const getFriendFavoriteShop = (id) => dispatch => {
    dispatch({type: types.GET_FRIEND_FAV_SHOP_START, payload: true})
    API.get(`/locations/${id}`)
        .then(res => {
            dispatch({type: types.GET_FRIEND_FAV_SHOP_SUCCESS, payload: res.data.location})
        })
        .catch(err => {
            dispatch({type: types.GET_FRIEND_FAIL, payload: {isLoading: false}})
        })
}

export const getFriendData = (username) => dispatch => {
    dispatch({type: types.GET_FRIEND_START, payload: true})
    API.get(`/users/?username=${username}`)
            .then(res => {
                dispatch({type: types.GET_FRIEND_SUCCESS, payload: res.data.users[0]})
                return res.data.users[0].favorite_pizza_shop
            })
            .then(favShop => {
                dispatch(getFriendFavoriteShop(favShop))
            })
            .catch(err => {
                dispatch({type: types.GET_FRIEND_FAIL, payload: {isLoading: false}})
            })
}