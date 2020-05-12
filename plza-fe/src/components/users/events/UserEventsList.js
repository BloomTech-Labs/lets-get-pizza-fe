import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "semantic-ui-react";
import UserEvent from "./UserEvent";
import { eventsByUser } from "../../../redux/actions/userActions.js";

const UserEventsList = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsByUser(user.id));
  }, []);

  return user.events.length === 0 ? (
    <div>
      <p>No Events</p>
    </div>
  ) : (
    <Item.Group divided>
      {user.events.map((event) => (
        <UserEvent
          key={event.id}
          event={event}
        />
      ))}
    </Item.Group>
  );
};

export default UserEventsList;
