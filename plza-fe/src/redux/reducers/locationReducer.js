import * as types from '../types'
const initialState = {
  locations: []
};

export const locationReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case types.USER_LOCATION:
            return {
            
                    ...state
            }
            default: 
            return state
    }
}