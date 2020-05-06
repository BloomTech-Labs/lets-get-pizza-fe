import * as types from '../types'
const initialState = {
    isLoading: false,
    friends: [],
    field: '',
    pendingUserChanges: {}
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOGIN_START:
        case types.REGISTER_START:
        case types.SUBMIT_SETTINGS_START:
            return {
                ...state,
                isLoading: true
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
        case types.SUBMIT_SETTINGS_SUCCESS:
            return {
                ...payload,
                isLoading: false,
                pendingUserChanges: { ...payload }
            }
        case types.LOGIN_FAIL:
        case types.REGISTER_FAIL:
        case types.SUBMIT_SETTINGS_FAIL:
            return {
                ...state,
                isLoading: false
            }
        case types.TOGGLE_EDIT:
            return {
                ...state, field: payload
            }
        case types.EDIT_SETTINGS:
            return {
                ...state, pendingUserChanges: { ...state.pendingUserChanges, ...payload }
            }
        case types.CANCEL_CHANGES:
            return {
                ...state, pendingUserChanges: { ...state }
            }
        default:
            return state
    }
}