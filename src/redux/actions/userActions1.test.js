import * as actions from "./userActions";
import * as types from "../types/userTypes";
import fetchMock from "fetch-mock";

import { data, APIMock } from "./userActionsTestData";

describe("Users authroization actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates USER_REGISTER_START and USER_REGISTER_SUCCESS when API register POST is complete", async () => {
    const expectedActions = [
      { type: types.USER_REGISTER_START, payload: true },
      { type: types.USER_REGISTER_SUCCESS },
    ];

    APIMock("post");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/auth/user/register";
    });

    await actions.userRegister(data.creds)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });

  it("creates USER_LOGIN_START and USER_LOGIN_SUCCESS when API login POST is complete", async () => {
    const expectedActions = [
      { type: types.USER_LOGIN_START, payload: true },
      { type: types.USER_LOGIN_SUCCESS },
    ];

    APIMock("post");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/auth/user/login";
    });

    await actions.userLogin(data.creds)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });
});

//
describe("Users settings actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

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
    const getState = jest.fn();

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
    const getState = jest.fn();

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
    const getState = jest.fn();

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
      { type: types.SUBMIT_SETTINGS_SUCCESS },
    ];
    const unexpectedAction = { type: types.EDIT_CANCEL_CHANGES };

    APIMock("put");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/users";
    });

    await actions.userSubmitSettings(data.save, data.user)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
      expect(call[0]).not.toEqual(unexpectedAction);
    });
  });

  it("creates EDIT_CANCEL_CHANGES when user clicks 'cancel'", () => {
    const expectedActions = [
      { type: types.SUBMIT_SETTINGS_START, payload: true },
      { type: types.EDIT_CANCEL_CHANGES },
    ];
    const unexpectedAction = { type: types.SUBMIT_SETTINGS_SUCCESS };

    APIMock("put");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/users";
    });

    actions.userSubmitSettings(data.cancel, data.user)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
      expect(call[0]).not.toEqual(unexpectedAction);
    });
  });

  it("creates IMAGE_UPLOAD_START and USER_REGISTER_SUCCESS when API PUT is complete", async () => {
    const expectedActions = [
      { type: types.IMAGE_UPLOAD_START, payload: true },
      { type: types.IMAGE_UPLOAD_SUCCESS },
    ];

    APIMock("put");
    const setOpen = jest.fn();
    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/users/images";
    });

    await actions.uploadImage(data.image, setOpen)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });

  it("creates IMAGE_DELETE_START and IMAGE_DELETE_SUCCESS when API PUT is complete", async () => {
    const expectedActions = [
      { type: types.IMAGE_DELETE_START, payload: true },
      { type: types.IMAGE_DELETE_SUCCESS },
    ];

    APIMock("put");
    const setOpen = jest.fn();
    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/users/images";
    });

    await actions.deleteImage(setOpen)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });
});

describe("User locations", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates USER_LOCATION_START and USER_LOCATION_SUCCESS when API GET is complete", async () => {
    const expectedActions = [
      { type: types.USER_LOCATION_START, payload: true },
      { type: types.USER_LOCATION_SUCCESS },
    ];

    APIMock("get");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `locations/${id}`;
    });

    await actions.locationByUser(data.user.id)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });
});

describe("User events", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates USER_EVENT_START and USER_EVENT_SUCCESS with correct payload when API event GET is complete", async () => {
    const expectedActions = [
      { type: types.USER_EVENT_START, payload: true },
      { type: types.USER_EVENT_SUCCESS, payload: data.events },
    ];

    APIMock("get");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `/events/users/${id}`;
    });

    await actions.eventsByUser(data.userid)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });

  it("creates USER_EVENT_DELETE_START and USER_EVENT_DELETE_SUCCESS with correct payload when API event DELETE is complete", async () => {
    const expectedActions = [
      { type: types.USER_EVENT_DELETE_START, payload: true },
      { type: types.USER_EVENT_DELETE_SUCCESS, payload: data.events[0] },
    ];

    APIMock("delete");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `/events/users/${id}`;
    });

    await actions.userDeleteEvent(data.events[0].id, data.creds.username)(
      dispatch,
      getState
    );

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });
});
