import React from "react";
import { Item, Label, Icon } from "semantic-ui-react";
import Moment from "react-moment";

const Events = ({ content }) => (
  <Item.Group divided>
    {content.map(event => (
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
          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
);

export default Events;
