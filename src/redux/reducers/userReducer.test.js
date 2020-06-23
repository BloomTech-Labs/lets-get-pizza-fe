import { userReducer, initialState } from "./userReducer";
import * as types from "../types/userTypes";
import { testData as data } from "../actions/userActionsTestData";
import { compareExpectedState } from "../../utils/reduxTestingFunctions";

describe("USER REDUCER TESTS", () => {
  it("should return initial state", () => {
    expect(userReducer(initialState, { type: "@@init" })).toEqual(initialState);
    expect(userReducer(initialState, { type: "@@init" })).not.toEqual({});
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it("Test All Start types", () => {
    const typesArr = [
      types.USER_LOGIN_START,
      types.USER_REGISTER_START,
      types.SUBMIT_SETTINGS_START,
      types.USER_LOCATION_START,
      types.IMAGE_UPLOAD_START,
      types.USER_EVENT_START,
      types.IMAGE_DELETE_START,
      types.GET_USER_FRIENDS_START,
      types.DELETE_USER_FRIENDS_START,
      types.ADD_USER_FRIEND_START,
    ];
    const payload = true;

    const expectedState = {
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

    compareExpectedState(
      typesArr,
      initialState,
      payload,
      expectedState,
      userReducer
    );
  });

  it("Test All Success Types", () => {
    const typesArr = [
      types.USER_LOGIN_SUCCESS,
      types.USER_REGISTER_SUCCESS,
      types.SUBMIT_SETTINGS_SUCCESS,
      types.IMAGE_UPLOAD_SUCCESS,
      types.IMAGE_DELETE_SUCCESS,
    ];
    const payload = data.user;
    const expectedState = {
      ...initialState,
      ...data.user,
      isLoading: false,
      error: undefined,
      pendingUserChanges: { ...data.user },
    };

    compareExpectedState(
      typesArr,
      initialState,
      payload,
      expectedState,
      userReducer
    );
  });

  it("Test All Auth Fail Types", () => {
    const typesArr = [
      types.USER_LOGIN_FAIL,
      types.USER_REGISTER_FAIL,
      types.IMAGE_UPLOAD_FAIL,
      types.IMAGE_DELETE_FAIL,
      types.ADD_USER_FRIEND_FAIL,
    ];
    const payload = { isLoading: false, error: "SOMETHING BAD HAPPENED" };
    const state = {
      ...initialState,
      isLoading: true,
    };
    const expectedState = {
      ...initialState,
      isLoading: false,
      error: "SOMETHING BAD HAPPENED",
    };

    compareExpectedState(typesArr, state, payload, expectedState, userReducer);
  });

  it("Test All Other Fail Types", () => {
    const typesArr = [
      types.SUBMIT_SETTINGS_FAIL,
      types.USER_LOCATION_FAIL,
      types.USER_EVENT_FAIL,
      types.DELETE_USER_FRIENDS_FAIL,
    ];
    const state = {
      ...initialState,
      isLoading: true,
    };
    const payload = false;
    const expectedState = {
      ...initialState,
      isLoading: false,
    };

    compareExpectedState(typesArr, state, payload, expectedState, userReducer);
  });

  it("Test LOCATION success", () => {
    const typesArr = [types.USER_LOCATION_SUCCESS];
    const state = {
      ...initialState,
      isLoading: true,
    };
    const payload = data.user.favShopDetails;
    const expectedState = {
      ...initialState,
      isLoading: false,
      favShopDetails: data.user.favShopDetails,
    };

    compareExpectedState(typesArr, state, payload, expectedState, userReducer);
  });

  it("Test TOGGLE_EDIT", () => {
    const typesArr = [types.TOGGLE_EDIT];
    const payload = "Settings";
    const expectedState = {
      ...initialState,
      field: "Settings",
    };

    compareExpectedState(
      typesArr,
      initialState,
      payload,
      expectedState,
      userReducer
    );
  });

  it("Test Edit Settings", () => {
    const typesArr = [types.EDIT_SETTINGS];
    const payload = data.user;
    const expectedState = {
      ...initialState,
      pendingUserChanges: { ...initialState.pendingUserChanges, ...data.user },
    };

    compareExpectedState(
      typesArr,
      initialState,
      payload,
      expectedState,
      userReducer
    );
  });

  it("Test Cancel Changes to Settigns", () => {
    const typesArr = [types.EDIT_CANCEL_CHANGES];
    const state = {
      ...initialState,
      display_name: "Joe",
      dietary_preference: ["Salad"],
      display_location: null,
      email: "test@test.com",
      favorite_pizza_shop: 1,
      favorite_pizza_toppings: "Not Pizza",
      profile_image: "IMG_URL",
      pendingUserChanges: {
        display_name: "Joseph",
        dietary_preference: ["Salad"],
        display_location: null,
        email: "test@test.com",
        favorite_pizza_shop: 1,
        favorite_pizza_toppings: "Definitely Pepperoni",
        profile_image: "IMG_URL",
      },
    };
    const expectedState = {
      ...state,
      pendingUserChanges: {
        display_name: "Joe",
        dietary_preference: ["Salad"],
        display_location: null,
        email: "test@test.com",
        favorite_pizza_shop: 1,
        favorite_pizza_toppings: "Not Pizza",
        profile_image: "IMG_URL",
      },
    };

    compareExpectedState(typesArr, state, null, expectedState, userReducer);
  });
});
