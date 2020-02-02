import React from "react";
import { Item } from "semantic-ui-react";
import Moment from "react-moment";

const Events = ({ content }) => (
  <Item.Group divided>
    {content.map(event => (
      <Item key={event.id}>
        <Item.Content>
          <Item.Header>{event.title}</Item.Header>
          <Item.Description>{event.description}</Item.Description>
          <Item.Extra>
            <Moment>{event.start_time}</Moment>
          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
);

export default Events;
