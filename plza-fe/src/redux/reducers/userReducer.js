import * as types from '../types'
const initialState = {
  isLoading: false,
  friends: []
};

export const userReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case types.LOGIN_START:
        case types.REGISTER_START:
            return {
                ...state,
                isLoading: true
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...payload, 
                isLoading: false
            }
        case types.LOGIN_FAIL: 
        case types.REGISTER_FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}