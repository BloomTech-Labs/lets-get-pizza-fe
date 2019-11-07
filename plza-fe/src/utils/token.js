export const hasToken = localStorage.hasOwnProperty("token");

export default function setToken(token) {
  localStorage.setItem("token", token);
}
