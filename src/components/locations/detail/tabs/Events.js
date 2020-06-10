import React from "react";
import { Item, Label, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import InviteModal from "../../../items/InviteModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { locationDeleteEvent } from "../../../../redux/actions/locationsActions.js"

const Events = ({ canEdit, content }) => {
  const user_id = useSelector(({user}) => user.id)
  const dispatch = useDispatch();

  return (
    <Item.Group divided>
      {content.map((event) => (
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
                    dispatch(locationDeleteEvent(event.id, content))
                  }}
                >
                  <Icon name="trash" />
                </Label>
              )}
              {user_id === event.user_id && <InviteModal event_id={event.id}/>}
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
};

export default Events;
