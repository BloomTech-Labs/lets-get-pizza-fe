import * as types from "../types/friendTypes";
const initialState = {
  events: [],
  reviews: [],
  friends: [],
  favShopDetails: {},
  isLoading: false,
  error: undefined,
};

export const friendReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_FRIEND_START:
        case types.GET_FRIEND_FAV_SHOP_START:
            return {
                ...state,
                isLoading: payload
            }
        case types.GET_FRIEND_SUCCESS:
            return {
                ...state,
                ...payload,
                isLoading: false
            }
        case types.GET_FRIEND_FAV_SHOP_SUCCESS:
            return {
                ...state,
                favShopDetails: {
                    ...payload
                },
                isLoading: false
            }
        case types.GET_FRIEND_FAIL:
        case types.GET_FRIEND_FAV_SHOP_FAIL:
            return {
                ...state,
                isLoading: payload.isLoading
            }
        default:
            return state
    }
}