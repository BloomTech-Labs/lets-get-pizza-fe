import * as types from '../types/friendTypes'
import { friendReducer as mockFriendReducer } from './friendReducer'
import { testData as data } from '../actions/userActionsTestData'
import { compareExpectedState } from '../../utils/reduxTestingFunctions'

// mock initial state for tests
const mockInitialState = {
    events: [],
    reviews: [],
    friends: [],
    favShopDetails: {},
    isLoading: false,
    error: undefined,
}


describe('FRIEND REDUCER TESTS', () => {
    it('should pass', () => {
        expect(mockFriendReducer).toStrictEqual(mockFriendReducer)
    })

    it('should return initial state', () => {
        expect(mockFriendReducer(mockInitialState, { type: '@@init' })).toEqual(mockInitialState)
        expect(mockFriendReducer(mockInitialState, { type: '@@init' })).not.toEqual({})
        expect(mockFriendReducer(mockInitialState, {})).toEqual(mockInitialState)
    })

    it('Test All Start Types', () => {
        const startTypes = [
            types.GET_FRIEND_START, 
            types.GET_FRIEND_FAV_SHOP_START, 
            types.FRIEND_REVIEW_START, 
            types.FRIEND_EVENT_START, 
            types.GET_ALL_FRIENDS_START
        ]
        const payload = true
        const unexpectedType = types.GET_FRIEND_SUCCESS
        const expectedState = { ...mockInitialState, isLoading: true}


        compareExpectedState(startTypes, mockInitialState, payload, expectedState, mockFriendReducer)
    })

    it('Test All Fail Types', () => {
        const failTypes = [
            types.GET_FRIEND_FAIL, 
            types.GET_FRIEND_FAV_SHOP_FAIL, 
            types.FRIEND_REVIEW_FAIL, 
            types.FRIEND_EVENT_FAIL, 
            types.GET_ALL_FRIENDS_FAIL
        ] 
        const payload = {isLoading: false, error: 'You fail'}
        const unexpectedType = types.GET_FRIEND_START
        const expectedState = { 
            ...mockInitialState, 
            isLoading: payload.isLoading, 
            error: payload.error
        }

        compareExpectedState(failTypes, mockInitialState, payload, expectedState, mockFriendReducer, unexpectedType)
    })

    it('should handle GET_FRIEND_SUCCESS', () => {
        const successAction = {
            type: types.GET_FRIEND_SUCCESS,
            payload: data.users[0]
        }

        const expectedState = { 
            ...mockInitialState, 
            ...successAction.payload, 
            isLoading: false
        }
        const returnedState = mockFriendReducer(mockInitialState, successAction)

        expect(returnedState).toStrictEqual(expectedState)
        expect(returnedState).toBeDefined()
        expect(returnedState).not.toStrictEqual(mockInitialState)
    })

    it('should handle GET_FRIEND_FAV_SHOP_SUCCESS', () => {
        const successAction = {
            type: types.GET_FRIEND_FAV_SHOP_SUCCESS,
            payload: data.locations[0]
        }

        const expectedState = {
            ...mockInitialState,
            favShopDetails: {
                ...successAction.payload
            },
            isLoading: false
        }

        const returnedState = mockFriendReducer(mockInitialState, successAction)

        expect(returnedState).toStrictEqual(expectedState)
        expect(returnedState).toBeDefined()
        expect(returnedState).not.toStrictEqual(mockInitialState)
    })

    it('should handle FRIEND_REVIEW_SUCCESS', () => {
        const successAction = {
            type: types.FRIEND_REVIEW_SUCCESS,
            payload: data.user.reviews
        }

        const expectedState = {
            ...mockInitialState,
            reviews: successAction.payload,
            isLoading: false
        }

        const returnedState = mockFriendReducer(mockInitialState, successAction)

        expect(returnedState).toStrictEqual(expectedState)
        expect(returnedState).toBeDefined()
        expect(returnedState).not.toStrictEqual(mockInitialState)        
    })

    it("should handle FRIEND_EVENT_SUCCESS", () => {
        const successAction = {
            type: types.FRIEND_EVENT_SUCCESS,
            payload: data.user.events
        }

        const expectedState = {
            ...mockInitialState,
            events: successAction.payload,
            isLoading: false
        }

        const returnedState = mockFriendReducer(mockInitialState, successAction)

        expect(returnedState).toStrictEqual(expectedState)
        expect(returnedState).toBeDefined()
        expect(returnedState).not.toStrictEqual(mockInitialState)
    })

    it("should handle GET_ALL_FRIENDS_SUCCESS", () => {
        const successAction = {
            type: types.GET_ALL_FRIENDS_SUCCESS,
            payload: data.users
        }

        const expectedState = {
            ...mockInitialState,
            friends: successAction.payload,
            isLoading: false
        }

        const returnedState = mockFriendReducer(mockInitialState, successAction)

        expect(returnedState).toStrictEqual(expectedState)
        expect(returnedState).toBeDefined()
        expect(returnedState).not.toStrictEqual(mockInitialState)
    })
})