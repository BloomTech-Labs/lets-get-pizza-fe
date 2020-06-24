import * as actions from "./locationsActions";
import * as types from "../types/locationTypes";
import { APIMock } from "../../utils/APIMock";
import { testData as data } from "./userActionsTestData";
import {
  compareExpectedCalls,
  spreadCalls,
} from "../../utils/reduxTestingFunctions";

const getState = jest.fn();

describe("location auth actions", () => {
  it("dispatches correctly when location logs in", async () => {
    const registerResponse = {
      location: data.locations,
      token: data.token,
    };
    const expectedActions = [
      { type: types.LOCATION_LOGIN_START, payload: true },
      { type: types.LOCATION_LOGIN_SUCCESS, payload: registerResponse },
    ];
    const dispatch = jest.fn((data) => data);

    await actions.locationLogin(data.creds)(dispatch, getState);

    await APIMock("post", "auth/location/login", registerResponse)
      .then((res) => {
        return dispatch({
          type: types.LOCATION_LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log();
      });
    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  it("dispatches correctly on location register", async () => {
    const registerResponse = {
      location: data.locations,
      token: data.token,
    };
    const expectedActions = [
      { type: types.LOCATION_REGISTER_START, payload: true },
      { type: types.LOCATION_REGISTER_SUCCESS, payload: registerResponse },
    ];
    const dispatch = jest.fn((data) => data);

    await actions.locationRegister(data.creds)(dispatch, getState);

    await APIMock("post", "auth/location/register", registerResponse)
      .then((res) => {
        return dispatch({
          type: types.LOCATION_REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log();
      });
    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });
});

describe("Event related location actions", () => {
  it("dispatches LOCATION EVENTS START and SUCCESS on API call", async () => {
    const expectedActions = [
      { type: types.LOCATION_EVENTS_START, payload: true },
      {
        type: types.LOCATION_EVENTS_SUCCESS,
        payload: data.locations[0].events,
      },
    ];
    const dispatch = jest.fn((data) => data);

    await actions.locationEvents(data.locations[0].id)(dispatch, getState);

    await APIMock(
      "get",
      `/events/locations/${data.locations[0].events[0].id}`,
      data.locations[0].events
    )
      .then((res) => {
        return dispatch({
          type: types.LOCATION_EVENTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log();
      });

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  it("creates LOCATION_EVENT_DELETE_START and LOCATION_EVENT_DELETE_SUCCESS with correct payload when API event DELETE is complete", async () => {
    const expectedActions = [
      { type: types.LOCATION_EVENTS_DELETE_START, payload: true },
      {
        type: types.LOCATION_EVENTS_DELETE_SUCCESS,
        payload: data.locations[0].events[0],
      },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.locationDeleteEvent(
      data.locations[0].events[0].id,
      data.creds
    )(dispatch, getState);

    await APIMock(
      "delete",
      `/events/${data.locations[0].events[0].id}`,
      data.locations[0].events[0]
    )
      .then((res) => {
        return dispatch({
          type: types.LOCATION_EVENTS_DELETE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("man didnt work");
      });

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  describe("rest", () => {
    it("LOCATION_CLAIM_START and SUCCESS are dispatched when API is called", async () => {
      const expectedActions = [
        { type: types.LOCATION_CLAIM_START, payload: true },
        { type: types.LOCATION_CLAIM_SUCCESS, payload: data.locations[0] },
      ];
      const dispatch = jest.fn((data) => data);

      await actions.locationClaim(data.locations[0], data.locations[0].id)(
        dispatch,
        getState
      );

      await APIMock(
        "post",
        `/auth/location/claim/${data.locations[0].id}`,
        data.locations[0]
      )
        .then((res) => {
          return dispatch({
            type: types.LOCATION_CLAIM_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log("shoot");
        });
      const calls = spreadCalls(dispatch.mock.calls);
      compareExpectedCalls(calls, expectedActions);
    });
  });
});
