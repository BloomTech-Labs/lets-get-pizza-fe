import React from "react";
import { Item, Label, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import InviteModal from "../../../items/InviteModal";
import { useSelector } from "react-redux";

const Events = ({ content }) => {
  const user_id = useSelector(({user}) => user.id)
  return (
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
            {user_id === event.id && <InviteModal event_id={event.id}/>}
          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
  )
};

export default Events;
