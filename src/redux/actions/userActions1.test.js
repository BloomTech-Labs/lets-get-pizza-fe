import * as actions from "./userActions";
import * as types from "../types/userTypes";
import { APIMock } from "../../utils/APIMock";
import { testData as data } from "./userActionsTestData";
import {
  compareExpectedCalls,
  spreadCalls,
} from "../../utils/reduxTestingFunctions";

const getState = jest.fn();

describe("Users authroization actions", () => {
  it("creates USER_REGISTER_START and USER_REGISTER_SUCCESS when API register POST is complete", async () => {
    const registerResponse = {
      user: data.user,
      token: data.token,
    };
    const expectedActions = [
      { type: types.USER_REGISTER_START, payload: true },
      { type: types.USER_REGISTER_SUCCESS, payload: registerResponse },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.userRegister(data.creds)(dispatch, getState);

    await APIMock("post", "/auth/user/login", registerResponse)
      .then((res) => {
        return dispatch({
          type: types.USER_REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  it("creates USER_LOGIN_START and USER_LOGIN_SUCCESS when API login POST is complete", async () => {
    const loginResponse = {
      user: data.user,
      message: data.message,
      token: data.token,
    };
    const expectedActions = [
      { type: types.USER_LOGIN_START, payload: true },
      {
        type: types.USER_LOGIN_SUCCESS,
        payload: loginResponse,
      },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.userLogin(data.creds)(dispatch, getState);

    await APIMock("post", "/auth/user/login", loginResponse)
      .then((res) => {
        return dispatch({
          type: types.USER_LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });
});

//
describe("Users settings actions", () => {
  it("creates TOGGLE_EDIT that passes in an empty string if field & id are the same", () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    const expectedAction = { type: types.TOGGLE_EDIT, payload: "" };

    actions.userToggleEdit(
      data.toggleClickSame.event,
      data.toggleClickSame.field
    )(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("creates TOGGLE_EDIT that passes in the given id if field & id are NOT the same", () => {
    const dispatch = jest.fn();

    const expectedAction = {
      type: types.TOGGLE_EDIT,
      payload: data.toggleClickDifferent.event.target.id,
    };

    actions.userToggleEdit(
      data.toggleClickDifferent.event,
      data.toggleClickDifferent.field
    )(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("creates EDIT_SETTINGS with payload for editing dietary_preference", () => {
    const dispatch = jest.fn();

    const expectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { dietary_preference: ["vegan"] },
    };

    const unexpectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { location: "L.A." },
    };

    actions.userEditSettings(
      data.settingsDietInput.event,
      data.settingsDietInput.value
    )(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
    expect(dispatch.mock.calls[0][0]).not.toEqual(unexpectedAction);
  });

  it("creates EDIT_SETTINGS with payload for all other user dashboard preferences", () => {
    const dispatch = jest.fn();

    const expectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { location: "L.A." },
    };

    const unexpectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { dietary_preference: ["vegan"] },
    };

    actions.userEditSettings(
      data.settingsAllInput.event,
      data.settingsAllInput.value
    )(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
    expect(dispatch.mock.calls[0][0]).not.toEqual(unexpectedAction);
  });

  it("creates SUBMIT_SETTINGS_START and SUBMIT_SETTINGS_SUCCESS when user clicks 'save' and API user settings PUT is complete", async () => {
    const expectedActions = [
      { type: types.SUBMIT_SETTINGS_START, payload: true },
      { type: types.SUBMIT_SETTINGS_SUCCESS, payload: data.user },
    ];
    const unexpectedAction = { type: types.EDIT_CANCEL_CHANGES };

    const dispatch = jest.fn((data) => data);

    await actions.userSubmitSettings(data.save, data.user)(dispatch, getState);

    await APIMock("put", "/users", data.user)
      .then((res) => {
        return dispatch({
          type: types.SUBMIT_SETTINGS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions, unexpectedAction);
  });

  it("creates EDIT_CANCEL_CHANGES when user clicks 'cancel'", async () => {
    const expectedActions = [
      { type: types.SUBMIT_SETTINGS_START, payload: true },
      { type: types.EDIT_CANCEL_CHANGES },
    ];
    const unexpectedAction = { type: types.SUBMIT_SETTINGS_SUCCESS };

    const dispatch = jest.fn();

    actions.userSubmitSettings(data.cancel, data.user)(dispatch, getState);

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions, unexpectedAction);
  });

  it("creates IMAGE_UPLOAD_START and USER_REGISTER_SUCCESS when API PUT is complete", async () => {
    const expectedActions = [
      { type: types.IMAGE_UPLOAD_START, payload: true },
      { type: types.IMAGE_UPLOAD_SUCCESS, payload: data.image },
    ];

    await APIMock("put", "/users/images");
    const setOpen = jest.fn();
    const dispatch = jest.fn((data) => data);

    await actions.uploadImage(data.image, setOpen)(dispatch, getState);

    await APIMock("put", `/users/images`, data.image)
      .then((res) => {
        return dispatch({
          type: types.IMAGE_UPLOAD_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
    const calls = spreadCalls(dispatch.mock.calls);

    compareExpectedCalls(calls, expectedActions);
  });

  it("creates IMAGE_DELETE_START and IMAGE_DELETE_SUCCESS when API PUT is complete", async () => {
    const expectedActions = [
      { type: types.IMAGE_DELETE_START, payload: true },
      { type: types.IMAGE_DELETE_SUCCESS, payload: "success" },
    ];

    await APIMock("put", "/users'images");
    const setOpen = jest.fn();
    const dispatch = jest.fn((data) => data);

    await actions.deleteImage(setOpen)(dispatch, getState);

    await APIMock("put", `/users/images`, "success")
      .then((res) => {
        return dispatch({
          type: types.IMAGE_DELETE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
    const calls = spreadCalls(dispatch.mock.calls);

    compareExpectedCalls(calls, expectedActions);
  });
});

describe("User locations actions", () => {
  it("creates USER_LOCATION_START and USER_LOCATION_SUCCESS when API GET is complete", async () => {
    const expectedActions = [
      { type: types.USER_LOCATION_START, payload: true },
      { type: types.USER_LOCATION_SUCCESS, payload: data.locations },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.locationByUser(data.user.id)(dispatch, getState);

    await APIMock("get", `locations/${data.user.id}`, data.locations)
      .then((res) => {
        return dispatch({
          type: types.USER_LOCATION_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
    const calls = spreadCalls(dispatch.mock.calls);

    compareExpectedCalls(calls, expectedActions);
  });
});

describe("User events actions", () => {
  it("creates USER_EVENT_START and USER_EVENT_SUCCESS with correct payload when API event GET is complete", async () => {
    const expectedActions = [
      { type: types.USER_EVENT_START, payload: true },
      { type: types.USER_EVENT_SUCCESS, payload: data.user.events },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.eventsByUser(data.userid)(dispatch, getState);

    await APIMock("get", `/events/users/${data.user.events[0].id}`, data.user.events)
      .then((res) => {
        return dispatch({ type: types.USER_EVENT_SUCCESS, payload: res.data });
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  it("creates USER_EVENT_DELETE_START and USER_EVENT_DELETE_SUCCESS with correct payload when API event DELETE is complete", async () => {
    const expectedActions = [
      { type: types.USER_EVENT_DELETE_START, payload: true },
      { type: types.USER_EVENT_DELETE_SUCCESS, payload: data.user.events[0] },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.userDeleteEvent(data.user.events[0].id, data.creds.username)(
      dispatch,
      getState
    );

    await APIMock(
      "delete",
      `/events/users/${data.user.events[0].id}`,
      data.user.events[0]
    )
      .then((res) => {
        return dispatch({
          type: types.USER_EVENT_DELETE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });
});
