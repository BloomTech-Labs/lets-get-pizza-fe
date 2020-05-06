import * as types from '../types'
const initialState = {
  events: [],
  reviews: [],
  friends: [],
  favShopDetails: {},
  isLoading: false,
  error: undefined
};

export const userReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case types.LOGIN_START:
        case types.REGISTER_START:
        case types.USER_LOCATION_START:
            return {
                ...state,
                isLoading: payload
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                ...payload, 
                isLoading: false
            }
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload
            } 
        case types.REGISTER_FAIL:
        case types.USER_LOCATION_FAIL:
            return {
                ...state,
                isLoading: payload
            }
        case types.USER_LOCATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                favShopDetails: {...payload}
            }
        default:
            return state
    }
}