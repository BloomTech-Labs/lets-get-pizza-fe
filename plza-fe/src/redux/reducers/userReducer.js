import * as types from '../types'
const initialState = {
    isLoading: false,
    friends: [],
    field: ''
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
                isLoading: false
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
        case types.CANCEL_CHANGES:
        default:
            return state
    }
}