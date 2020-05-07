import * as types from '../types'
const initialState = {
    isLoading: false,
    friends: [],
    field: '',
    pendingUserChanges: {},
    events: [],
    reviews: [],
    friends: [],
    favShopDetails: {},
    isLoading: false,
    error: undefined
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOGIN_START:
        case types.REGISTER_START:
        case types.SUBMIT_SETTINGS_START:
        case types.USER_LOCATION_START:
            return {
                ...state,
                isLoading: payload
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
        case types.SUBMIT_SETTINGS_SUCCESS:
            return {
                ...state,
                ...payload,
                isLoading: false,
                pendingUserChanges: { ...payload }
            }
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case types.REGISTER_FAIL:
        case types.SUBMIT_SETTINGS_FAIL:
        case types.USER_LOCATION_FAIL:
            return {
                ...state,
                isLoading: payload
            }
        case types.USER_LOCATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                favShopDetails: { ...payload }
            }
        case types.TOGGLE_EDIT:
            return {
                ...state, field: payload
            }
        case types.EDIT_SETTINGS:
            return {
                ...state, pendingUserChanges: { ...state.pendingUserChanges, ...payload }
            }
        case types.EDIT_CANCEL_CHANGES:
            return {
                ...state, pendingUserChanges: { ...state }
            }
        default:
            return state
    }
}