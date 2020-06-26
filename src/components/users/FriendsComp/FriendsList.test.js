import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FriendsList from "./FriendsList";
import FriendOnList from "./FriendOnList";

jest.mock("../../../redux/actions/userActions");
const mockStore = configureStore();

describe("FriendsList", () => {
  let store;
  let component;
  let friendOnListcomponent;

  let friendsArray = [
    {
      friend_profile_image: "",
      friend_username: "animecody",
      friend_bio: "DBZ all day bby",
      friends_id: 8,
    },
    {
      friend_profile_image: "",
      friend_username: "JDawg",
      friend_bio: "Ask me about my pizza",
      friends_id: 9,
    },
    {
      friend_profile_image: "",
      friend_username: "Buddy",
      friend_bio: "Pizza without cheese, sauce, and toppings is just bread",
      friends_id: 10,
    },
  ];

  beforeEach(() => {
    store = mockStore({
      user: {
        username: "SteadyFreddie",
        friends: [
          {
            id: 1,
            friend_profile_image: "image",
            friend_username: "animecody",
            friend_bio: "DBZ all day bby",
            friends_id: 8,
          },
          {
            id: 2,
            friend_profile_image: "image",
            friend_username: "JDawg",
            friends_bio: "Ask me about my pizza",
            friend_id: 9,
          },
          {
            id: 3,
            friend_profile_image: "image",
            friend_username: "Buddy",
            friend_bio:
              "Pizza without cheese, sauce, and toppings is just bread",
            friends_id: 10,
          },
        ],
      },
    });

    store.dispatch = jest.fn();
    console.log(store.dispatch.mock, "mock");

    component = renderer.create(
      <Provider store={store}>
        <FriendsList />
        {/* <FriendOnList friends={friendsArray} /> */}
      </Provider>
    );
  });
  //   friendOnListcomponent = renderer.create(
  //     <Provider store={store}>

  //     </Provider>
  //   );
  //   console.log(friendOnListcomponent);

  it("expect length of friends to be 3", async () => {
    let children = component.toJSON().children.map((children) => children);
    console.log(children);
    expect(children.length).toBe(3);
  });

  //   const friends = [
  //     {
  //       friend_profile_image: "",
  //       friend_username: "animecody",
  //       friend_bio: "DBZ all day bby",
  //       friends_id: 8,
  //     },
  //     {
  //       friend_profile_image: "",
  //       friend_username: "JDawg",
  //       friend_bio: "Ask me about my pizza",
  //       friends_id: 9,
  //     },
  //     {
  //       friend_profile_image: "",
  //       friend_username: "Buddy",
  //       friend_bio: "Pizza without cheese, sauce, and toppings is just bread",
  //       friends_id: 10,
  //     },
  //   ];

  // const removeFriend = ();

  //   it("adds 2 + 2", () => {
  //     expect(2 + 2).toBe(5);
  //   });

  //   let newFriends = [];
  //   const removeFriend = (id) => {
  //     newFriends = friends.filter((keep) => {
  //       keep.id != id;
  //     });
  //   };

  //   const deleteFriendModal = `Are you sure you want to remove ${friends[1].friend_username} from your friends list?`;

  //   it("test initial friends length", () => {
  //     expect(friends.length).toBe(3);
  //   });
  // });

  //   test("Friendslist", async () => {
  //     const { getByTestId } = render(<FriendsList />);

  //     const friendsLIST = getByTestId("friendsListTestId");
  //     expect(friendsLIST.children.length).toEqual(3);
  //   });
});
