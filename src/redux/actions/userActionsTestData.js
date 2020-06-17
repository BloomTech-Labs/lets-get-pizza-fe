import API from "../../utils/API";

export const data = {
  creds: {
    username: "JDawg",
    password: "1234",
  },
  toggleClickSame: {
    event: { target: { id: "location" } },
    field: "location",
  },
  toggleClickDifferent: {
    event: { target: { id: "location" } },
    field: "dietary_preference",
  },
  settingsDietInput: {
    event: { target: {} },
    value: ["vegan"],
  },
  settingsAllInput: {
    event: { target: { name: "location" } },
    value: "L.A.",
  },
  user: {
    id: 1,
    events: [],
    reviews: [],
    friends: [],
    favShopDetails: {},
    savedPromos: [],
  },
  save: { target: { id: "save" } },
  cancel: { target: { id: "cancel" } },
  image:
    "https://res.cloudinary.com/plza/image/upload/v1588043869/qxhdqbj4sthf57bdgltz.jpg",
  events: [
    { id: 1, name: "event1" },
    { id: 2, name: "event2" },
  ],
};

export const APIMock = (method) => {
  API[method] = jest.fn((url) => {
    return Promise.resolve();
  });
};
