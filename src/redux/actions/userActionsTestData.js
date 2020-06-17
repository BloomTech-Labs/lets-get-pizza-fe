export const testData = {
  creds: {
    username: "JDawg",
    password: "1234",
  },
  message: "Welome pizzalover",
  token: "XXXXXXXXX",
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
  events: [
    { id: 1, name: "event1" },
    { id: 2, name: "event2" },
    {
      id: 1,
      user_id: 1,
      location_id: 1,
      title: "event1",
      description: "super amazing event",
      start_time: Date.now(),
      end_time: Date.now + 100,
    },
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
  locations: [
    {
      id: 1,
      last_name: "McTesterson",
      username: "DUNCAN",
      email: "test@test.com",
      password: "secret",
      first_name: "Jest",
      update_foursquare: true,
      phone_number: "5551234567",
      foursquare_id: "1",
      business_name: "Pizza King",
      latitude: 0,
      longitude: 0,
      address: "1234 Sauce St",
      website_url: "",
      official_description: "We like sauce like you like cheese",
      thumbnail_image: "",
      inside_image: "",
      street_view_image: "",
      menu_image: "",
      order_service: "horse & buggy",
      store_bio: "We reeeallly like sauce.",
      dietary_offerings: ["vegan"],
    },
  ],
  image: {
    id: 11,
    username: "pizzalover",
    email: "iluvpizza@test.com",
    profile_image:
      "https://res.cloudinary.com/plza/image/upload/v1592089926/bcdtzp5eoh9twubtrfmq.png",
    display_name: "PizzaLover",
    dietary_preference: null,
    favorite_pizza_toppings: "Pineapple",
    display_location: "Denver, CO",
    favorite_pizza_shop: 2,
    bio: "I could eat pizza for every meal",
  },
};

export const spreadCalls = arrayOfArrays => {
  let newArray = []
  arrayOfArrays.forEach(array => newArray = [...newArray, ...array]);

  return newArray
}

// compares if items in an array are equal to each other
// requires an array of results & an array of expected
//      order of expectation array matters
// optional parameter of a single item not to be expected
export const compareExpectedCalls = (
  resultsArr,
  expectedArr,
  unexpectedItem
) => {
  resultsArr.forEach((result, idx) => {
    if (unexpectedItem) {
      expect(result).not.toEqual(unexpectedItem);
    }
    expect(result).toEqual(expectedArr[idx]);
  });
  expectedArr.forEach((expectation, idx) => {
    expect(expectation).toEqual(resultsArr[idx]);
  });
};
