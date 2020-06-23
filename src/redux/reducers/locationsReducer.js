import * as types from "../types/locationTypes";
const initialState = {
  isLoading: false,
  error: undefined,
  events: [],
};

export const locationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOCATION_LOGIN_START:
    case types.LOCATION_REGISTER_START:
    case types.LOCATION_CLAIM_START:
    case types.LOCATION_EVENTS_START:
      return {
        ...state,
        isLoading: payload,
      };
    case types.LOCATION_LOGIN_SUCCESS:
    case types.LOCATION_REGISTER_SUCCESS:
    case types.LOCATION_CLAIM_SUCCESS:
      return {
        ...payload,
        error: undefined,
        isLoading: false,
      };
    case types.LOCATION_LOGIN_FAIL:
    case types.LOCATION_REGISTER_FAIL:
    case types.LOCATION_CLAIM_FAIL:
      return {
        ...state,
        error: payload.error,
        isLoading: payload.isLoading,
      };
    case types.LOCATION_EVENTS_SUCCESS:
    case types.LOCATION_EVENTS_DELETE_SUCCESS:
    case types.LOCATION_EVENTS_EDIT_SUCCESS:
      return {
        ...state,
        events: [...payload],
      };
    default:
      return state;
  }
};
