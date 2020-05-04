import * as types from '../types'
const initialState = {
  bio: "",
  dietary_preference: "",
  display_location: "",
  display_name: "",
  email: "",
  favorite_pizza_shop: null,
  favorite_pizza_toppings: "",
  id: null,
  profile_image: "",
  username: "",
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