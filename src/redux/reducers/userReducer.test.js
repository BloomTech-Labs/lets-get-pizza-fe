import { userReducer, initialState } from "./userReducer";
import * as types from '../types/userTypes';
import {testData as data} from '../actions/userActionsTestData';



describe("userReducer returns the proper updated state", () => {
    it("changes isLoading", () => {
        const action = { type: types.USER_LOGIN_START, payload: true}
        const expected = {
            field: "",
            pendingUserChanges: {},
            events: [],
            reviews: [],
            friends: [],
            favShopDetails: {},
            savedPromos: [],
            isLoading: true,
            error: undefined,
          };

        const newState = userReducer(initialState, action)

        expect(newState).toEqual(expected);
        expect(newState).toStrictEqual(expected);
        expect(newState).not.toEqual(initialState);
        expect(newState).not.toStrictEqual(initialState);
    })
})