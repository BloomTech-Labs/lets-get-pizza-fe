import React, { useEffect, useState } from "react";
import { Item } from "semantic-ui-react";
import UserEvent from "./UserEvent";
import { curr_user } from "../../../utils/auth";
import API from "../../../utils/API"

const UserEventsList = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    API.get(`/events/users/${curr_user.id}`)
      .then((res) => {
        console.log(res.data)
        setEvents(res.data)
      })
      .catch((err) => console.log(err));
  }, [setEvents]);

  return (
    <Item.Group divided>
      {events.map(event => (
        <UserEvent key={event.id} event={event} />
      ))}
    </Item.Group>
  );
};

export default UserEventsList;
