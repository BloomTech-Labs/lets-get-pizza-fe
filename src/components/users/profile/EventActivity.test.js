import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { useHistory } from "react-router-dom";
import EventActivity from "./EventActivity";
import {
  findElementById,
  findFirstProp,
} from "../../../utils/reduxTestingFunctions";

const mockStore = configureStore({});

describe("event activity", () => {
  let store;
  let component;

  const event = {
    business_name: "pizza man",
    location_id: 1122,
    description: "this is a test man",
    title: "the pizza place",
  };

  const user = {
    profile_image:
      "https://vignette.wikia.nocookie.net/dragonballfighterz/images/e/ea/Goku_Artwork.png/revision/latest/top-crop/width/360/height/450?cb=20180902173423",
    username: "AnimeCody",
  };

  beforeEach(() => {
    store = mockStore({
      user: user,
    });

    component = renderer.create(
      <Provider store={store}>
        <EventActivity user={user} event={event} />
      </Provider>
    );
  });

  it(" profile image matches state", () => {
    const image = component.toJSON()[0].children[0].children[0].props.src;
    expect(image).toBe(user.profile_image);
  });
  it("should render username from props", () => {
    const ex = component.root.findAllByType("a")[0].props;
    expect(ex.children).toContain(user.username);
  });
});
