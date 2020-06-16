import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUserFriends,
  addUserFriend,
} from "../../../redux/actions/userActions";

export default function RenderedButton({ user, editing, setEditing }) {
  const loc = useLocation();
  const [curr_user, friends] = useSelector(({ user }) => [user, user.friends]);
  const dispatch = useDispatch();
  // Use .find to iterate through logged in user's friends array
  // If matching username then return user. Else return undefined
  const addedFriend = friends.find(
    (friend) => friend.friend_username === user.username
  );
  let button;
  if (user && loc.pathname.includes("dash")) {
    button = (
      <Button
        color="blue"
        onClick={() => {
          setEditing(!editing);
        }}
      >
        <a style={{ color: "#fff" }} href="#">
          Edit Bio
        </a>
      </Button>
    );
  } else if (addedFriend) {
    button = (
      <Button
        color="blue"
        onClick={() => dispatch(deleteUserFriends(addedFriend.id, curr_user))}
      >
        Remove Friend
      </Button>
    );
  } else {
    button = (
      <Button
        color="blue"
        onClick={() => dispatch(addUserFriend(curr_user, user.id))}
      >
        Add Friend
      </Button>
    );
  }
  return <>{button}</>;
}
