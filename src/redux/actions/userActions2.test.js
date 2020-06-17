import * as actions from "./userActions";
import * as types from "../types/userTypes";
import { APIMock } from "../../utils/APIMock";
import { testData as data } from "./userActionsTestData";
import {
  compareExpectedCalls,
  spreadCalls,
} from "../../utils/reduxTestingFunctions";

const getState = jest.fn();

describe("User reviews actions", () => {
  it("creates USER_REVIEW_START and USER_REVIEW_SUCCESS with correct payload when API reviews GET is complete", async () => {
    const expectedActions = [
      { type: types.USER_REVIEW_START, payload: true },
      { type: types.USER_REVIEW_SUCCESS, payload: data.user.reviews },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.reviewsByUser(data.user.id)(dispatch, getState);

    await APIMock("get", `/reviews/users/${data.user.id}`, data.user.reviews)
      .then((res) => {
        return dispatch({ type: types.USER_REVIEW_SUCCESS, payload: res.data });
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  it("creates USER_REVIEW_DELETE_START and USER_REVIEW_DELETE_SUCCESS with correct payload when API reviews DELETE is complete", async () => {
    const expectedActions = [
      { type: types.USER_REVIEW_DELETE_START, payload: true },
      { type: types.USER_REVIEW_DELETE_SUCCESS, payload: data.user.reviews },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.userDeleteReview(data.user.reviews[0].id, data.user.id)(
      dispatch,
      getState
    );
    await APIMock(
      "delete",
      `/reviews/${data.user.reviews[0].id}`,
      data.user.reviews
    )
      .then((res) => {
        return dispatch({
          type: types.USER_REVIEW_DELETE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });
});

describe("User friends actions", () => {
  it("creates GET_USER_FRIENDS_START and GET_USER_FRIENDS_SUCCESS with correct payload when API friends GET is complete", async () => {
    const expectedActions = [
      { type: types.GET_USER_FRIENDS_START, payload: true },
      { type: types.GET_USER_FRIENDS_SUCCESS, payload: data.user.friends },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.getUserFriends(data.user.id)(dispatch, getState);

    await APIMock("get", `/friends/${data.user.id}`, data.user.friends)
      .then((res) => {
        return dispatch({
          type: types.GET_USER_FRIENDS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  it("creates DELETE_USER_FRIENDS_START and DELETE_USER_FRIENDS_SUCCESS with correct payload when API friends DELETE is complete", async () => {
    const expectedActions = [
      { type: types.DELETE_USER_FRIENDS_START, payload: true },
      { type: types.DELETE_USER_FRIENDS_SUCCESS, payload: data.user.friends },
    ];
    const dispatch = jest.fn((data) => data);

    await actions.deleteUserFriends(data.user.friends[1].id, data.user.id)(
      dispatch,
      getState
    );

    await APIMock("delete", `/friends/${data.user.id}`, data.user.friends)
      .then((res) => {
        return dispatch({
          type: types.DELETE_USER_FRIENDS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  it("creates ADD_USER_FRIEND_START and ADD_USER_FRIEND_SUCCESS with correct payload when API friends POST is complete", async () => {
    const expectedActions = [
      { type: types.ADD_USER_FRIEND_START, payload: true },
      { type: types.ADD_USER_FRIEND_SUCCESS, payload: false },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.addUserFriend(data.user, 4)(dispatch, getState);

    await APIMock("post", "/friends", "data")
      .then((res) => {
        if (res.data === "data") {
          return dispatch({
            type: types.ADD_USER_FRIEND_SUCCESS,
            payload: false,
          });
        }
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });
});

describe("User promotions actions", () => {
  it("creates GET_USER_FRIENDS_START and GET_USER_PROMOS with correct payload when API promos GET is complete", async () => {
    const expectedActions = [
      { type: types.GET_USER_FRIENDS_START, payload: true },
      { type: types.GET_USER_PROMOS, payload: data.user.savedPromos },
    ];

    const dispatch = jest.fn((data) => data);

    await actions.getUserPromos(data.user.id)(dispatch, getState);

    await APIMock(
      "get",
      `/savedPromos/users/${data.user.id}`,
      data.user.savedPromos
    )
      .then((res) => {
        return dispatch({ type: types.GET_USER_PROMOS, payload: res.data });
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    compareExpectedCalls(calls, expectedActions);
  });

  // userActions addUserPromo will need to be tested here when its built out
});

describe("User bio actions", () => {
  it("creates UPDATE_BIO_SUCCESS with correct payload when API users PUT request is complete", async () => {
    const expectedAction = {
      type: types.UPDATE_BIO_SUCCESS,
      payload: data.user.bio,
    };

    const dispatch = jest.fn((data) => data);

    await actions.updateUserBio(data.user.bio)(dispatch, getState);

    await APIMock("put", "/users", data.user)
      .then((res) => {
        return dispatch({
          type: types.UPDATE_BIO_SUCCESS,
          payload: res.data.bio,
        });
      })
      .catch((err) => console.log(err));

    const calls = spreadCalls(dispatch.mock.calls);
    expect(calls[0]).toStrictEqual(expectedAction);
  });
});
