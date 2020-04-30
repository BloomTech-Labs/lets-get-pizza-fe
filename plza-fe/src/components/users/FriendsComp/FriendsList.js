import React, { useState, useEffect } from "react";
import { curr_user } from "../../../utils/auth";
import { List } from "semantic-ui-react";
import FriendOnList from "./FriendOnList";
import API from "../../../utils/API";

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
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
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
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    API.get(`/friends/${curr_user.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <List floated="left" size="big">
        {console.log("here")}

        {dummyList.map((friend) => {
          return <FriendOnList key={friend.name} friends={friend} />;
        })}
      </List>
    </>
  );
}
