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
            .catch(err => {
                dispatch({type: types.GET_FRIEND_FAIL, payload: {isLoading: false}})
            })
}

// Events
export const eventsByFriend = (id) => dispatch => {
    dispatch({ type: types.FRIEND_EVENT_START, payload: true })
    API.get(`/events/users/${id}`)
        .then((res) => {
            const currentDate = new Date().toISOString();
            dispatch({
                type: types.FRIEND_EVENT_SUCCESS,
                payload: res.data
                    .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
                    .filter((date) => date.start_time > currentDate)
            });
        })
        .catch((err) => {
            dispatch({ type: types.FRIEND_EVENT_FAIL, payload: {isLoading: false} })
        }); 
}

// Reviews
export const reviewsByFriend = id => dispatch => {
    dispatch({type: types.FRIEND_REVIEW_START, payload: true})
    API.get(`/reviews/users/${id}`)
        .then(res => {
            dispatch({
                type: types.FRIEND_REVIEW_SUCCESS,
                payload: res.data.sort((a, b) => b.id - a.id)
            })
        })
        .catch((err) => {
            dispatch({ type: types.FRIEND_REVIEW_FAIL, payload: {isLoading: false} })
        })
}