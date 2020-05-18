import axios from "axios";

/**
 * Creates an Axios instance with a predefined base URL as well as
 * sending the user's stored JWT as a header.
 */
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: JSON.parse(localStorage.getItem("token")),
  },
  responseType: "json",
});
