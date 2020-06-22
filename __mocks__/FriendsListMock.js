import readFileSync from "fs";
import path from "path";
import { act } from "@testing-library/react";

const friends = [
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

// const friendos = JSON.parse(
//   readFileSync(path.join(__dirname, "res.json")).toString()
// );

export const _friends = friends;

const mock = {
  friends: jest.fn(() => {
    return {
      then: (callback) => act(() => callback([friends])),
    };
  }),
};

export default mock;
