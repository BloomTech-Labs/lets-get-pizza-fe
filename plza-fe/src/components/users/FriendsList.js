import React from "react";
import { curr_user } from "../../utils/auth";
import { List } from "semantic-ui-react";
import FriendOnList from "./FriendOnList";

const dummyList = [
  {
    name: "Buddy2",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
];
export default function FriendsList() {
  return (
    <List floated="left" size="big">
      {dummyList.map((friend) => {
        return <FriendOnList key={friend.name} friends={friend} />;
      })}
    </List>
  );
}
