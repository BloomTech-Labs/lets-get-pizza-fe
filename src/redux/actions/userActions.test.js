import * as actions from "./userActions";
import * as types from "../types/userTypes";
import fetchMock from "fetch-mock";
import API from "../../utils/API";

describe("Users authroization actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates USER_LOGIN_START and USER_LOGIN_SUCCESS when API login POST is complete", async () => {
    const creds = {
      username: "JDawg",
      password: "1234",
    };

    const expectedActions = [
      { type: types.USER_LOGIN_START, payload: true },
      { type: types.USER_LOGIN_SUCCESS },
    ];

    API.post = jest.fn((url) => {
      return Promise.resolve();
    });

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/auth/user/login";
    });

    await actions.userLogin(creds)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });

  it("creates USER_REGISTER_START and USER_REGISTER_SUCCESS when API register POST is complete", async () => {
    const creds = {
      username: "newguy",
      password: "4321",
    };

    const expectedActions = [
      { type: types.USER_REGISTER_START, payload: true },
      { type: types.USER_REGISTER_SUCCESS },
    ];

    API.post = jest.fn((url) => {
      return Promise.resolve();
    });

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/auth/user/register";
    });

    await actions.userRegister(creds)(dispatch, getState);

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
    const input = {
      event: { target: { id: "location" } },
      field: "location",
    };

    const dispatch = jest.fn();
    const getState = jest.fn();

    const expectedAction = { type: types.TOGGLE_EDIT, payload: "" };

    actions.userToggleEdit(input.event, input.field)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("creates TOGGLE_EDIT that passes in the given id if field & id are NOT the same", () => {
    const input = {
      event: { target: { id: "location" } },
      field: "dietary_preference",
    };

    const dispatch = jest.fn();
    const getState = jest.fn();

    const expectedAction = {
      type: types.TOGGLE_EDIT,
      payload: input.event.target.id,
    };

    actions.userToggleEdit(input.event, input.field)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("creates EDIT_SETTINGS with payload for editing dietary_preference", () => {
    const input = {
      event: { target: {} },
      value: "vegan",
    };

    const dispatch = jest.fn();
    const getState = jest.fn();

    const expectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { dietary_preference: "vegan" },
    };

    const unexpectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { location: "L.A." },
    };

    actions.userEditSettings(input.event, input.value)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
    expect(dispatch.mock.calls[0][0]).not.toEqual(unexpectedAction);
  });

  it("creates EDIT_SETTINGS with payload for all other user dashboard preferences", () => {
    const input = {
      event: { target: { name: "location" } },
      value: "L.A.",
    };

    const dispatch = jest.fn();
    const getState = jest.fn();

    const expectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { location: "L.A." },
    };

    const unexpectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { dietary_preference: "vegan" },
    };

    actions.userEditSettings(input.event, input.value)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
    expect(dispatch.mock.calls[0][0]).not.toEqual(unexpectedAction);
  });

  it("creates SUBMIT_SETTINGS_START and SUBMIT_SETTINGS_SUCCESS when user clicks 'save' and API user settings PUT is complete", async () => {
    const user = {
      events: [],
      reviews: [],
      friends: [],
      favShopDetails: {},
      savedPromos: [],
    };

    const event = { target: { id: "save" } };

    const expectedActions = [
      { type: types.SUBMIT_SETTINGS_START, payload: true },
      { type: types.SUBMIT_SETTINGS_SUCCESS },
    ];
    const unexpectedActions = [
      { type: types.SUBMIT_SETTINGS_START, payload: true },
      { type: types.EDIT_CANCEL_CHANGES },
    ];

    API.put = jest.fn((url) => {
      return Promise.resolve();
    });

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/users";
    });

    await actions.userSubmitSettings(event, user)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
      expect(call[0]).not.toEqual(unexpectedActions[1]);
    });
  });

  it("creates EDIT_CANCEL_CHANGES when user clicks 'cancel'", () => {
    const user = {
      events: [],
      reviews: [],
      friends: [],
      favShopDetails: {},
      savedPromos: [],
    };

    const event = { target: { id: "cancel" } };

    const expectedActions = [
      { type: types.SUBMIT_SETTINGS_START, payload: true },
      { type: types.EDIT_CANCEL_CHANGES },
    ];
    const unexpectedActions = [
      { type: types.SUBMIT_SETTINGS_START, payload: true },
      { type: types.SUBMIT_SETTINGS_SUCCESS },
    ];

    API.put = jest.fn((url) => {
      return Promise.resolve();
    });

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/users";
    });

    actions.userSubmitSettings(event, user)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
      expect(call[0]).not.toEqual(unexpectedActions[1]);
    });
  });

  it("creates IMAGE_UPLOAD_START and USER_REGISTER_SUCCESS when API PUT is complete", async () => {
    const image = "http.google.com/images";

    const expectedActions = [
      { type: types.IMAGE_UPLOAD_START, payload: true },
      { type: types.IMAGE_UPLOAD_SUCCESS },
    ];

    API.put = jest.fn((url) => {
      return Promise.resolve();
    });
    const setOpen = jest.fn();
    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: "/users/images";
    });

    await actions.uploadImage(image, setOpen)(dispatch, getState);

    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });

  it("creates IMAGE_DELETE_START and IMAGE_DELETE_SUCCESS when API PUT is complete", async () => {
    const expectedActions = [
      { type: types.IMAGE_DELETE_START, payload: true },
      { type: types.IMAGE_DELETE_SUCCESS },
    ];

    API.put = jest.fn((url) => {
      return Promise.resolve();
    });
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
