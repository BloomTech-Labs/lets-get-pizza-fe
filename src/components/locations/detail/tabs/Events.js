import React, { useState, useEffect } from "react";
import { Item, Label, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import API from "../../../../utils/API";

const Events = ({ canEdit, content }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get(`/events/locations/${content}`)
      .then((response) => {
        const currentDate = new Date().toISOString();
        setEvents(
          response.data
            .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
            .filter((date) => date.start_time > currentDate)
        );
      })
      .catch((error) => console.log(error));
  }, [content]);

  const locationDeleteEvent = (id) => {
    API.delete(`/events/${id}`)
      .then((res) => {
        const filteredEvents = events.filter((event) => event.id !== id);
        console.log("filtered", filteredEvents);
        setEvents([...filteredEvents]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Item.Group divided>
      {events.map((event) => (
        <Item key={event.id}>
          <Item.Content>
            <Item.Header>{event.title}</Item.Header>
            <Item.Description>{event.description}</Item.Description>
            <Item.Extra>
              <Label title="Event date">
                <Icon name="calendar alternate" />
                <Moment format="MMMM D" date={event.start_time} />
              </Label>

              <Label title="Event time">
                <Icon name="clock" />
                <Moment format="h:mm a" date={event.start_time} />
                &mdash;
                <Moment format="h:mm a" date={event.end_time} />
              </Label>

              {event.user_id === null && canEdit === true && (
                <Label
                  title="Delete event"
                  as="a"
                  onClick={(e) => {
                    e.stopPropagation();
                    locationDeleteEvent(event.id);
                  }}
                >
                  <Icon name="trash" />
                </Label>
              )}
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
};

export default Events;
