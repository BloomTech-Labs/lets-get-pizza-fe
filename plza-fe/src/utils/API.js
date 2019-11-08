import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Token: `${localStorage.getItem("token")}`
  },
  responseType: "json"
});
