import React from "react";
// import {
//   render,
//   fireEvent,
//   cleanup,
//   waitFor,
//   waitForElementToBeRemoved,
// } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { findFirstProp } from "../../../utils/reduxTestingFunctions";
import renderer from "react-test-renderer";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import ActivityFeed from "./ActivityFeed";

const mockStore = configureStore({});

describe("activities render", () => {
  let store;
  let component;

  const activities = [
    {
      address: "34579 Yucaipa Blvd (5th St), Yucaipa, CA 92399, United States",
      business_name: "Pizza Chalet",
      id: 14,
      location_id: 33,
      rating: 5,
      review_text: "I used to go here all the time as a child",
      review_title: "Nostalgia",
      user_id: 10,
    },
  ];
  const user = {
    username: "AnimeCody",
  };

  beforeEach(() => {
    store = mockStore({
      user: {
        username: "AnimeCody",
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <ActivityFeed activities={activities} user={user} />
      </Provider>
    );
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });
});
