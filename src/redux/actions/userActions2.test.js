import * as actions from "./userActions";
import * as types from "../types/userTypes";
import { APIMock } from "../../utils/APIMock";
import { testData as data } from "./userActionsTestData";

describe("User reviews actions", () => {
  it("creates USER_REVIEW_START and USER_REVIEW_SUCCESS with correct payload when API reviews GET is complete", async () => {
    const expectedActions = [
      { type: types.USER_REVIEW_START, payload: true },
      { type: types.USER_REVIEW_SUCCESS },
    ];

    await APIMock("get");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      return { url: `/events/users/${data.user.id}` };
    });

    await actions.reviewsByUser(data.user.id)(dispatch, getState);
    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });

  it("creates USER_REVIEW_DELETE_START and USER_REVIEW_DELETE_SUCCESS with correct payload when API reviews DELETE is complete", async () => {
    const expectedActions = [
      { type: types.USER_REVIEW_DELETE_START, payload: true },
      { type: types.USER_REVIEW_DELETE_SUCCESS },
    ];

    await APIMock("delete");

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      return { url: `/events/users/${data.user.id}` };
    });

    await actions.userDeleteReview(data.reviews[0].id, data.user.id)(
      dispatch,
      getState
    );
    dispatch.mock.calls.forEach((call, idx) => {
      expect(call[0]).toEqual(expectedActions[idx]);
    });
  });
});
