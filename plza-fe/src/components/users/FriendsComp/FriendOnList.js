import React from "react";
import { List, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
//todo add links around to user profile

export default function FriendOnList(props) {
  return (
    <List.Item>
      <Image avatar src={props.friends.friend_image} />
      <List.Content>
        <List.Content floated="left">
          <List.Header as="a">{props.friends.friend_username}</List.Header>
          <List.Description>{props.friends.bio}</List.Description>
        </List.Content>
      </List.Content>
    </List.Item>
  );
}
