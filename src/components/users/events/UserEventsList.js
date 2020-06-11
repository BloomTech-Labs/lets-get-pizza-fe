import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "semantic-ui-react";
import UserEvent from "./UserEvent";
import { eventsByUser } from "../../../redux/actions/userActions.js";
import InvitedEvent from "./InvitedEvent";

const UserEventsList = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsByUser(user.id));
  }, [dispatch, user.id]);

  return user.events.length === 0 ? (
    <div>
      <p>No Events</p>
    </div>
  ) : (
    <Item.Group divided>
      {user.events.map((event) => (
        !event.response ? 
        <UserEvent
          key={event.id}
          event={event}
        /> : 
        <InvitedEvent 
          key={event.id}
          event={event}
        />
      ))}
    </Item.Group>
  );
};

export default UserEventsList;
