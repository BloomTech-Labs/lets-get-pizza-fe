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

    const expectedAction = { type: types.TOGGLE_EDIT, payload: input.event.target.id };

    actions.userToggleEdit(input.event, input.field)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("creates EDIT_SETTINGS with payload for editing dietary_preference", () => {
    const input1 = {
      event: { target: {} },
      value: "vegan",
    };

    const dispatch = jest.fn();
    const getState = jest.fn();

    const expectedAction = {
      type: types.EDIT_SETTINGS,
      payload: { dietary_preference: "vegan" },
    };

    actions.userEditSettings(input1.event, input1.value)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
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

    actions.userEditSettings(input.event, input.value)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });
});