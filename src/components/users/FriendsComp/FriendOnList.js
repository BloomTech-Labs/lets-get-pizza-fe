import React, { useState } from "react";
import { List, Image, Button, Confirm } from "semantic-ui-react";
import "./FriendsList.css";
import "../MobileStyle.css";

export default function FriendOnList(props) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const deleteUserMessage = `Are you sure you want to remove ${props.friends.friend_username} from your friends list?`;

  return (
    <div className="finalDisplay">
      <List.Item className="listDisplay">
        <List.Content className="listItem">
          <Image
            size="tiny"
            circular
            src={props.friends.friend_profile_image}
            className="avatarImage"
          />

          <List.Content className="friendStyling" floated="left">
            <List.Header as="a" href={`/users/${props.friends.friend_username}`}>{props.friends.friend_username}</List.Header>
            <List.Description>{props.friends.friend_bio}</List.Description>
          </List.Content>
        </List.Content>
      </List.Item>
      <Button
        className="friendButton"
        color="black"
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
