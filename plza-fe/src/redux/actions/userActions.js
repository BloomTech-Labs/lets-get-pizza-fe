import API from "../../utils/API";
import * as types from "../types";

export const userLogin = ({ username, password }) => (dispatch) => {
  dispatch({ type: types.LOGIN_START, payload: true });
  API.post("/auth/user/login", { username, password })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.user });
      window.location.replace("/users/dash");
    })
    .catch((err) => {
      dispatch({
        type: types.LOGIN_FAIL,
        payload: "Invalid username or password",
      });
    });
};

export const userRegister = (data) => (dispatch) => {
  dispatch({ type: types.REGISTER_START, payload: true });
  delete data.verify_password;
  API.post("/auth/user/register", data)
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.user });
      window.location.replace("/users/dash");
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_FAIL, payload: false });
    });
};

// Settings
export const userToggleEdit = (event, field) => (dispatch) => {
  if (event.target.id === field) {
    dispatch({ type: types.TOGGLE_EDIT, payload: "" });
  } else {
    dispatch({ type: types.TOGGLE_EDIT, payload: event.target.id });
  }
};

export const userEditSettings = (event, value) => (dispatch) => {
  !event.target.name
    ? dispatch({
        type: types.EDIT_SETTINGS,
        payload: { dietary_preference: value },
      })
    : dispatch({
        type: types.EDIT_SETTINGS,
        payload: { [event.target.name]: value },
      });
};

export const userSubmitSettings = (event, user) => (dispatch) => {
  dispatch({ type: types.SUBMIT_SETTINGS_START });
  if (event.target.id === "save") {
    API.put(`/users`, user)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: types.SUBMIT_SETTINGS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.SUBMIT_SETTINGS_FAIL, payload: false });
      });
  } else {
    dispatch({ type: types.EDIT_CANCEL_CHANGES });
  }
};

// Location
export const locationByUser = (id) => (dispatch) => {
  dispatch({ type: types.USER_LOCATION_START, payload: true });
  API.get(`locations/${id}`)
    .then((res) => {
      dispatch({
        type: types.USER_LOCATION_SUCCESS,
        payload: res.data.location,
      });
    })
    .catch((err) => {
      dispatch({ type: types.USER_LOCATION_FAIL, payload: false });
      console.log(err, "from error reducer");
    });
};

//events by user
export const eventsByUser = (id) => (dispatch) => {
  API.get(`events/users/${id}`)
    .then((res) => {
      dispatch({
        type: types.USER_EVENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//reviews by user
export const reviewsByUser = (id) => (dispatch) => {
  API.get(`reviews/users/${id}`)
    .then((res) => {
      dispatch({
        type: types.USER_REVIEW_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
