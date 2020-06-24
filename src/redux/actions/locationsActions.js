import * as types from "../types/locationTypes";
import API from "../../utils/API";

export const locationLogin = ({ username, password }, history) => (
  dispatch
) => {
  dispatch({ type: types.LOCATION_LOGIN_START, payload: true });
  API.post("auth/location/login", { username, password })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({
        type: types.LOCATION_LOGIN_SUCCESS,
        payload: res.data.location,
      });
      window.location.replace("/");
    })
    .catch((err) => {
      dispatch({
        type: types.LOCATION_LOGIN_FAIL,
        payload: { error: "Invalid username or password", isLoading: false },
      });
    });
};

export const locationRegister = (data) => (dispatch) => {
  dispatch({ type: types.LOCATION_REGISTER_START, payload: true });
  delete data.verify_password;
  API.post("auth/location/register", data)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({
        type: types.LOCATION_REGISTER_SUCCESS,
        payload: res.data.location,
      });
      window.location.replace("/");
    })
    .catch((err) => {
      dispatch({
        type: types.LOCATION_REGISTER_FAIL,
        payload: {
          error: "There was an error with your registration, please try again",
          isLoading: false,
        },
      });
    });
};

export const locationClaim = (data, id) => (dispatch) => {
  dispatch({ type: types.LOCATION_CLAIM_START, payload: true });
  delete data.verify_password;
  API.post(`/auth/location/claim/${id}`, data)
    .then((res) => {
      localStorage.removeItem("persist:root");
      localStorage.removeItem("token");
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({
        type: types.LOCATION_CLAIM_SUCCESS,
        payload: res.data.location,
      });
      window.location.replace("/");
    })
    .catch((err) => {
      dispatch({
        type: types.LOCATION_CLAIM_FAIL,
        payload: {
          error: "There was an error claiming this business, please try again",
          isLoading: false,
        },
      });
    });
};

export const locationEvents = (id) => (dispatch) => {
  dispatch({ type: types.LOCATION_EVENTS_START, payload: true });
  API.get(`/events/locations/${id}`)
    .then((res) => {
      const currentDate = new Date().toISOString();

      dispatch({
        type: types.LOCATION_EVENTS_SUCCESS,
        payload: res.data
          .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
          .filter((date) => date.start_time > currentDate),
      });
    })
    .catch((err) => {
      dispatch({ type: types.LOCATION_EVENTS_FAIL, payload: false });
    });
};

export const locationDeleteEvent = (id, events) => (dispatch) => {
  dispatch({ type: types.LOCATION_EVENTS_DELETE_START, payload: true });
  API.delete(`/events/${id}`)
    .then((res) => {
      const filteredEvents = events.filter((event) => event.id !== id);
      dispatch({
        type: types.LOCATION_EVENTS_DELETE_SUCCESS,
        payload: filteredEvents,
      });
    })
    .catch((err) => {
      dispatch({ type: types.LOCATION_EVENTS_DELETE_FAIL, payload: false });
    });
};
