import React, { useState } from "react";
import { List, Image, Button, Confirm } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./FriendsList.css";
//todo add links around to user profile

export default function FriendOnList(props) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const deleteUserMessage = `Are you sure you want to remove ${props.friends.friend_username} from your friends list?`;

  return (
    <div className="finalDisplay">
      <List.Item className="listDisplay">
        <List.Content className="listItem">
          <Image avatar src={props.friends.friend_image} />
          <List.Content className="pleaseWork">
            <List.Content className="friendStyling" floated="left">
              <List.Header as="a">{props.friends.friend_username}</List.Header>
              <List.Description>{props.friends.bio}</List.Description>
            </List.Content>
          </List.Content>
        </List.Content>
      </List.Item>
      <Button
        className="friendButton"
        color="red"
        onClick={() => setModalVisibility(true)}
      >
        Remove {props.friends.friend_username}
      </Button>
      <Confirm
        open={modalVisibility}
        content={deleteUserMessage}
        onCancel={() => setModalVisibility(false)}
        onConfirm={() => {
          props.remove(props.friends.friends_id);
        }}
      />
    </div>
  );
}
