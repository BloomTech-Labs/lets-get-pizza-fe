import API from "../../utils/API";

export const testData = {
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
  reviews: [
    {
      location_id: 80,
      user_id: 2,
      id: 52,
      rating: 5,
      review_title: "SOOOO GOOD",
      review_text: "yum yum yum!! GO HERE",
      business_name: "Rosa's Italian Resaurant",
      address: "2400 Columbus St, Bakersfield, CA 93306, United States",
    },
  ],
};

export const APIMock = (method) => {
  API[method] = jest.fn((url) => {
    return Promise.resolve();
  });
};
