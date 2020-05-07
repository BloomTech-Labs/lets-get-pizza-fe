import * as types from '../types'
const initialState = {
    isLoading: false
}

export const locationsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.LOGIN_START:
            return {
                ...state,
                isLoading: payload
            }
        case types.LOGIN_SUCCESS:
            return {
                ...payload,
                isLoading: false
            }
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state
    }
}
