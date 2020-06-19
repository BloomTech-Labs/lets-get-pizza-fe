import API from "../../utils/API";
import * as types from "../types/userTypes";

export const userLogin = ({ username, password }, history) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_START, payload: true });
  API.post("/auth/user/login", { username, password })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data.user });
      // return logged in user's id
      return res.data.user.id;
    })
    .then((id) => {
      // dispatch `getUserFriends` to grab a list of user friends
      dispatch(getUserFriends(id));
      window.location.replace("/users/dash/profile");
    })
    .catch((err) => {
      dispatch({
        type: types.USER_LOGIN_FAIL,
        payload: "Invalid username or password",
      });
    });
};

export const userRegister = (data) => (dispatch) => {
  dispatch({ type: types.USER_REGISTER_START, payload: true });
  delete data.verify_password;
  API.post("/auth/user/register", data)
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({ type: types.USER_REGISTER_SUCCESS, payload: res.data.user });
      window.location.replace("/users/dash/profile");
    })
    .catch((err) => {
      dispatch({
        type: types.USER_REGISTER_FAIL,
        payload: {
          error: "There was an error with your registration, please try again",
          isLoading: false,
        },
      });
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
  dispatch({ type: types.SUBMIT_SETTINGS_START, payload: true });
  if (event.target.id === "save") {
    API.put(`/users`, user)
      .then((res) => {
        dispatch({ type: types.SUBMIT_SETTINGS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.SUBMIT_SETTINGS_FAIL, payload: false });
      });
  } else {
    dispatch({ type: types.EDIT_CANCEL_CHANGES });
  }
};

export const uploadImage = (formData, setOpen) => (dispatch) => {
  dispatch({ type: types.IMAGE_UPLOAD_START, payload: true });

  // set header `Content-Type` to `multipart/form-data`
  API.put("/users/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      dispatch({ type: types.IMAGE_UPLOAD_SUCCESS, payload: res.data });
      setOpen(false);
    })
    .catch((err) => {
      dispatch({
        type: types.IMAGE_UPLOAD_FAIL,
        payload: {
          error: "There was an error uploading your image",
          isLoading: false,
        },
      });
    });
};

export const deleteImage = (setOpen) => (dispatch) => {
  dispatch({ type: types.IMAGE_DELETE_START, payload: true });
  API.put("/users", {
    profile_image:
      "https://res.cloudinary.com/plza/image/upload/v1588043869/qxhdqbj4sthf57bdgltz.jpg",
  })
    .then((res) => {
      dispatch({ type: types.IMAGE_DELETE_SUCCESS, payload: res.data });
      setOpen(false);
    })
    .catch((err) => {
      dispatch({
        type: types.IMAGE_DELETE_FAIL,
        payload: {
          error: "There was an error removing your image",
          isLoading: false,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: types.IMAGE_UPLOAD_FAIL,
        payload: {
          error: "There was an error uploading your image",
          isLoading: false,
        },
      });
    });
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
    });
};

// Events
export const eventsByUser = (id) => (dispatch) => {
  dispatch({ type: types.USER_EVENT_START, payload: true });
  API.get(`/events/users/${id}`)
    .then((res) => {
      const currentDate = new Date().toISOString();
      // filter out any declined invites
      const filterDeclined = res.data.invitedEvents.filter(
        (event) => event.response !== "declined"
      );

      // combine created and invited events and sort by date
      const events = [...res.data.createdEvents, ...filterDeclined]
        .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
        .filter((date) => date.start_time > currentDate);
      dispatch({
        type: types.USER_EVENT_SUCCESS,
        payload: events,
      });
    })
    .catch((err) => {
      dispatch({ type: types.USER_EVENT_FAIL, payload: false });
    });
};

export const userDeleteEvent = (id, user) => (dispatch) => {
  dispatch({ type: types.USER_EVENT_DELETE_START, payload: true });
  API.delete(`/events/${id}`)
    .then((res) => {
      const filterDeletedEvent = user.events.filter((event) => event.id !== id);
      dispatch({
        type: types.USER_EVENT_DELETE_SUCCESS,
        payload: filterDeletedEvent,
      });
    })
    .catch((err) => {
      dispatch({ type: types.USER_EVENT_DELETE_FAIL, payload: false });
    });
};

// Reviews
export const reviewsByUser = (id) => (dispatch) => {
  dispatch({type: types.USER_REVIEW_START, payload: true})
  API.get(`/reviews/users/${id}`)
    .then((res) => {
      dispatch({
        type: types.USER_REVIEW_SUCCESS,
        payload: res.data.sort((a, b) => b.id - a.id),
      });
    })
    .catch((err) => {
      dispatch({ type: types.USER_REVIEW_FAIL, payload: false });
    });
};

export const userDeleteReview = (id, user) => (dispatch) => {
  dispatch({ type: types.USER_REVIEW_DELETE_START, payload: true });
  API.delete(`/reviews/${id}`)
    .then((res) => {
      const filterDeletedReview = user.reviews.filter(
        (review) => review.id !== id
      );
      dispatch({
        type: types.USER_REVIEW_DELETE_SUCCESS,
        payload: filterDeletedReview,
      });
    })
    .catch((err) => {
      dispatch({ type: types.USER_REVIEW_DELETE_FAIL, payload: false });
    });
};

// Friends
export const getUserFriends = (id) => (dispatch) => {
  dispatch({ type: types.GET_USER_FRIENDS_START, payload: true });
  API.get(`/friends/${id}`)
    .then((res) => {
      dispatch({
        type: types.GET_USER_FRIENDS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_FRIENDS_FAIL, payload: false });
    });
};

export const deleteUserFriends = (id, user) => (dispatch) => {
  dispatch({ type: types.DELETE_USER_FRIENDS_START, payload: true });
  API.delete(`friends/${id}`)
    .then((res) => {
      let newList = user.friends.filter((keep) => keep.id != id);
      dispatch({ type: types.DELETE_USER_FRIENDS_SUCCESS, payload: newList });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_USER_FRIENDS_FAIL, payload: false });
    });
};

export const addUserFriend = (user, friends_id) => (dispatch) => {
  dispatch({ type: types.ADD_USER_FRIEND_START, payload: true });
  API.post(`/friends`, { user_id: user.id, friends_id })
    .then((res) => {
      dispatch({ type: types.ADD_USER_FRIEND_SUCCESS, payload: false });
    })
    .then(() => {
      // dispatch `getUserFriends` to get updated list of friends
      dispatch(getUserFriends(user.id));
    })
    .catch((err) => {
      dispatch({
        type: types.ADD_USER_FRIEND_FAIL,
        payload: {
          isLoading: false,
          error: "There was an error adding your friend",
        },
      });
    });
};

// Promos
export const getUserPromos = (id) => (dispatch) => {
  dispatch({ type: types.GET_USER_FRIENDS_START, payload: true });
  API.get(`savedPromos/users/${id}`)
    .then((res) => {
      dispatch({
        type: types.GET_USER_PROMOS,
        payload: res.data,
      });
    })
    .catch((err) => {
      // Errors on actions need to be handeled some other way than
      // console.log(err);
    });
};

export const addUserPromo = (user_id, promo_id) => (dispatch) => {
  let postData = { user_id, promo_id };
  API.post("/savedPromos", postData)
    .then((res) => {
    })
    .catch((err) => {
      // Errors on actions need to be handeled some other way than
      // console.log(err);
    });
};

// Bio
export const updateUserBio = (changes) => (dispatch) => {
  API.put("/users", { bio: changes })
    .then((res) => {
      dispatch({ type: types.UPDATE_BIO_SUCCESS, payload: changes });
    })
    .catch((err) => {
      // Errors on actions need to be handeled some other way than
      // console.log(err.message);
    });
};
