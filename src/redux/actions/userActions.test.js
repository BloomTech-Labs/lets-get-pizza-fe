import * as actions from "./userActions";
import * as types from "../types/userTypes";
import fetchMock from "fetch-mock";
import API from "../../utils/API";

describe("authroization functions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates USER_LOGIN_START and USER_LOGIN_SUCCESS when API POST is complete", async () => {
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

  it("creates USER_REGISTER_START and USER_REGISTER_SUCCESS when API POST is complete", async () => {
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
