/**
 * Returns an object from Local Storage or returns false if it does not exist.
 *
 * @param {string} item
 */
export function getItem(item) {
  if (localStorage.hasOwnProperty(item)) {
    return JSON.parse(localStorage.getItem(item));
  } else {
    return false;
  }
}

export const hasToken = localStorage.hasOwnProperty("token");
export const curr_user = getItem("curr_user");
export const curr_location = getItem("curr_location");

/**
 * Logs out a user by removing all of their Local Storage items and
 * then redirecting them to the home page.
 */
export function logoutUser() {
  localStorage.removeItem("persist:root");
  localStorage.removeItem("curr_location");
  localStorage.removeItem("token");

  window.location.replace("/?logout=true");
}

/**
 * Authenticates a user account by setting a Local Storage
 * item called `token` which is derived from the Axios response object
 * the function is called with.
 *
 * Afterwards the `curr_user` or `curr_location` items are set based on
 * what type of user has logged in.
 *
 * @param {object} response
 */
export default function authenticateUser(response) {
  localStorage.setItem("token", response.token);

  if (response.user) {
    localStorage.removeItem("curr_location");
    localStorage.setItem("curr_user", JSON.stringify(response.user));

    window.location.replace("/locations/map");
  } else if (response.location) {
    localStorage.removeItem("curr_user");
    localStorage.setItem("curr_location", JSON.stringify(response.location));

    window.location.replace(`/locations/${response.location.id}`);
  }
}
