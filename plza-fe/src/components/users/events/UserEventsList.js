import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Item } from "semantic-ui-react";
import UserEvent from "./UserEvent";
import API from "../../../utils/API";

const UserEventsList = () => {
  const user = useSelector((state) => state.user);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get(`/events/users/${user.id}`)
      .then((res) => {
        const currentDate = new Date().toISOString();
        setEvents(
          res.data
            .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
            .filter(date => date.start_time > currentDate)
        );
      })
      .catch((err) => console.log(err));
  }, [setEvents, user.id]);

  const deleteEvent = (id) => {
    API.delete(`/events/${id}`)
      .then((res) => {
        const filterDeletedEvent = events.filter((event) => event.id !== id);
        setEvents([...filterDeletedEvent]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Item.Group divided>
      {events.map((event) => (
        <UserEvent
          key={event.id}
          event={event}
          events={events}
          setEvents={setEvents}
          deleteEvent={deleteEvent}
        />
      ))}
    </Item.Group>
  );
};

export default UserEventsList;
