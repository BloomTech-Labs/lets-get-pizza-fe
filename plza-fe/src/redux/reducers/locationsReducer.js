import * as types from '../types'
const initialState = {
    isLoading: false,
    error: undefined
}

export const locationsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.LOGIN_START:
            return {
                ...state,
                isLoading: payload
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...payload,
                error: undefined,
                isLoading: false
            }
        case types.LOGIN_FAIL:
        case types.REGISTER_FAIL:
            return {
                ...state,
                error: payload.error,
                isLoading: payload.isLoading
            }
        default:
            return state
    }
}
