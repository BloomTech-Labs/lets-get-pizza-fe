import API from "./API";
import MockAdapter from "axios-mock-adapter";

export const APIMock = async (method, endpoint, resData) => {
  const url = endpoint
    ? `http://wwww.mockserver.com/${endpoint}`
    : "http://wwww.mockserver.com/";
  let mockAdapter = new MockAdapter(API);
  const response = resData
    ? {
        token: "test token",
        method: method,
        data: resData,
        endpoint: url
      }
    : {
        token: "test token",
        method: method,
      };

  if (method === "get") {
    mockAdapter.onGet(url).reply(200, response);
  } else if (method === "post") {
    mockAdapter.onPost(url).reply(201, response);
  } else if (method === "put") {
    mockAdapter.onPut(url).reply(200, response);
  } else if (method === "delete") {
    mockAdapter.onDelete(url).reply(200, response);
  }
  return mockAdapter.handlers[method][0].filter(
    (item) => typeof item === "object"
  )[0];
};
