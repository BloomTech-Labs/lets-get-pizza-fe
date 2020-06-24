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
        case types.FRIEND_REVIEW_START:
        case types.FRIEND_EVENT_START:
        case types.GET_ALL_FRIENDS_START:
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
        case types.FRIEND_REVIEW_SUCCESS: 
            return {
                ...state,
                reviews: payload,
                isLoading: false
            }
        case types.FRIEND_EVENT_SUCCESS:
            return {
                ...state, 
                events: payload,
                isLoading: false
            }
        case types.GET_ALL_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friends: payload,
                error: undefined
            }
        case types.GET_FRIEND_FAIL:
        case types.GET_FRIEND_FAV_SHOP_FAIL:
        case types.FRIEND_EVENT_FAIL:
        case types.FRIEND_REVIEW_FAIL:
        case types.GET_ALL_FRIENDS_FAIL:
            return {
                ...state,
                isLoading: payload.isLoading,
                error: payload.error
            }
        default:
            return state
    }
}