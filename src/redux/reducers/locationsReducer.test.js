import * as types from "../types/locationTypes";
import { locationsReducer } from "./locationsReducer";
import { testData as data } from "../actions/userActionsTestData";
import {
  compareExpectedState,
  compareExpectedCalls,
} from "../../utils/reduxTestingFunctions";

const mockInitialState = {
  isLoading: false,
  error: undefined,
  events: [],
};

describe("locations reducer", () => {
  it("works", () => {
    expect(locationsReducer).toStrictEqual(locationsReducer);
  });
  it("should return state", () => {
    expect(locationsReducer(mockInitialState, { type: "@@init" })).toEqual(
      mockInitialState
    );
    expect(locationsReducer(mockInitialState, { type: "@@init" })).not.toEqual(
      {}
    );
    expect(locationsReducer(mockInitialState, {})).toEqual(mockInitialState);
  });

  it("tests all start types", () => {
    const startTypes = [
      types.LOCATION_LOGIN_START,
      types.LOCATION_REGISTER_START,
      types.LOCATION_CLAIM_START,
    ];
    const payload = true;
    const unexpectedType = types.LOCATION_CLAIM_SUCCESS;
    const expectedState = { ...mockInitialState, isLoading: true };

    compareExpectedState(
      startTypes,
      mockInitialState,
      payload,
      expectedState,
      locationsReducer,
      unexpectedType
    );
  });
  it("tests all failing types", () => {
    const failTypes = [
      types.LOCATION_LOGIN_FAIL,
      types.LOCATION_CLAIM_FAIL,
      types.LOCATION_REGISTER_FAIL,
    ];
    const payload = { isLoading: false, error: "failing" };
    const expectedState = {
      ...mockInitialState,
      isLoading: payload.isLoading,
      error: payload.error,
    };
    compareExpectedState(
      failTypes,
      mockInitialState,
      payload,
      expectedState,
      locationsReducer
    );
  });

  it("tests location success types", () => {
    const successTypes = [
      types.LOCATION_REGISTER_SUCCESS,
      types.LOCATION_CLAIM_SUCCESS,
      types.LOCATION_LOGIN_SUCCESS,
    ];
    const payload = { isLoading: false, error: undefined, events: ["hello"] };
    const expectedState = {
      ...mockInitialState,
      isLoading: payload.isLoading,
      error: payload.error,
      events: payload.events,
    };
    compareExpectedState(
      successTypes,
      mockInitialState,
      payload,
      expectedState,
      locationsReducer
    );
  });

  it("tests location event success types", () => {
    const successTypes = [
      types.LOCATION_EVENTS_EDIT_SUCCESS,
      types.LOCATION_EVENTS_SUCCESS,
      types.LOCATION_EVENTS_DELETE_SUCCESS,
    ];
    const payload = ["events"];
    const expectedState = {
      ...mockInitialState,
      events: payload,
    };
    compareExpectedState(
      successTypes,
      mockInitialState,
      payload,
      expectedState,
      locationsReducer
    );
  });
});
