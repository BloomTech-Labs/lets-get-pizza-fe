import React from "react";
import { List, Image } from "semantic-ui-react";

export default function FriendOnList(props) {
  return (
    <List.Item>
      <Image avatar src={props.friends.image} />
      <List.Content>
        <List.Content floated="left">
          <List.Header as="a">{props.friends.name}</List.Header>
          <List.Description>{props.friends.bio}</List.Description>
        </List.Content>
      </List.Content>
    </List.Item>
  );
}
