import * as actions from './friendActions'
import * as types from '../types/friendTypes'
import { APIMock } from '../../utils/APIMock'
import { testData as data } from './userActionsTestData'
import {
    compareExpectedCalls,
    spreadCalls
} from '../../utils/reduxTestingFunctions'

const getState = jest.fn()

describe('Get Friend Data', () => {
    it('creates GET_FRIEND_START and GET_FRIEND_SUCCESS when API GET is complete', async () => {
        const getFriendResponse = {
            users: data.users
        }
        const expectedActions = [
            { type: types.GET_FRIEND_START, payload: true },
            { type: types.GET_FRIEND_SUCCESS, payload: getFriendResponse.users[0]}
        ]

        const dispatch = jest.fn((data) => data)

        await actions.getFriendData("Billy")(dispatch, getState)

        await APIMock("get", "/users/?username", getFriendResponse)
            .then((res) => {
                return dispatch({
                    type: types.GET_FRIEND_SUCCESS,
                    payload: res.data.users[0]
                })
            })
            .catch(err => console.log(err))
        const calls = spreadCalls(dispatch.mock.calls)
        compareExpectedCalls(calls, expectedActions)
    })
})

describe('Get Friend Favorite Shop', () => {
    it('creates GET_FRIEND_FAV_SHOP_START and GET_FRIEND_FAV_SHOP_SUCCESS when API GET is complete', async () => {
        const getFriendFavShopResponse = {
            location: data.locations[0]
        }

        const expectedActions = [
            { type: types.GET_FRIEND_FAV_SHOP_START, payload: true},
            { type: types.GET_FRIEND_FAV_SHOP_SUCCESS, payload: getFriendFavShopResponse.location}
        ]

        const dispatch = jest.fn(data => data)

        await actions.getFriendFavoriteShop(data.locations[0].id)(dispatch, getState)

        await APIMock('get', '/locations/1', getFriendFavShopResponse)
            .then(res => {
                return dispatch({
                    type: types.GET_FRIEND_FAV_SHOP_SUCCESS,
                    payload: res.data.location
                })
            })
            .catch(err => console.log(err))
        const calls = spreadCalls(dispatch.mock.calls)
        compareExpectedCalls(calls, expectedActions)
    })
})

describe('Events By Friends', () => {
    it('creates FRIEND_EVENT_START and FRIEND_EVENT_SUCCESS', async () => {
        const friendEventResponse = {
            events: data.user.events
        }

        const expectedActions = [
            { type: types.FRIEND_EVENT_START, payload: true},
            { type: types.FRIEND_EVENT_SUCCESS, payload: friendEventResponse.events}
        ]

        const dispatch = jest.fn(data => data)

        await actions.eventsByFriend(data.user.id)(dispatch, getState)
        
        await APIMock('get', `/events/users/1`, friendEventResponse)
            .then(res => {
                return dispatch({
                    type: types.FRIEND_EVENT_SUCCESS,
                    payload: res.data.events
                })
            })
            .catch(err => console.log(err))

            const calls = spreadCalls(dispatch.mock.calls)
            
            compareExpectedCalls(calls, expectedActions)
    })
})

describe("Reviews By Friend", () => {
    it('creates FRIEND_REVIEW_START and FRIEND_REVIEW_SUCCESS when API GET complete', async () => {
        const friendReviewsResponse = {
            reviews: data.user.reviews
        }

        const expectedActions = [
            { type: types.FRIEND_REVIEW_START, payload: true },
            { type: types.FRIEND_REVIEW_SUCCESS, payload: friendReviewsResponse.reviews}
        ]

        const dispatch = jest.fn(data => data)

        await actions.reviewsByFriend(data.user.id)(dispatch, getState)

        await APIMock('get', '/reviews/user/1', friendReviewsResponse)
            .then(res => {
                return dispatch({
                    type: types.FRIEND_REVIEW_SUCCESS,
                    payload: res.data.reviews
                })
            })
            .catch(err => console.log(err))
        const calls = spreadCalls(dispatch.mock.calls)
        compareExpectedCalls(calls, expectedActions)
    })
})

describe("Get All Friends", () => {
    it("should create GET_ALL_FRIENDS_START and GET_ALL_FRIENDS_SUCCESS when API GET complete", async () => {
        const expectedResponse = {
            friends: data.user.friends
        }

        const expectedActions = [
            {type: types.GET_ALL_FRIENDS_START, payload: true},
            { type: types.GET_ALL_FRIENDS_SUCCESS, payload: expectedResponse.friends}
        ]

        const dispatch = jest.fn(data => data)
        await actions.getAllFriends(data.user.id)(dispatch, getState)

        await APIMock('get', 'friends/1', expectedResponse.friends)
            .then(res => {
                return dispatch({
                    type: types.GET_ALL_FRIENDS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => console.log(err))
        
        const calls = spreadCalls(dispatch.mock.calls)
        compareExpectedCalls(calls, expectedActions)
    })
})