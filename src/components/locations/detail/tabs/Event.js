import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item, Label, Icon } from 'semantic-ui-react';
import Moment from 'react-moment';
import EventLocUpdate from './EventLocUpdate';
import InviteModal from "../../../items/InviteModal";
import { locationDeleteEvent } from '../../../../redux/actions/locationsActions';

const Event = ({ canEdit, event, user_id }) => {
  const events = useSelector((state) => state.location.events);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [eventToEdit, setEventToEdit] = useState({});
  const dispatch = useDispatch();

  const editEvent = (event) => {
    setEventToEdit(event);
  };

  return (
    <>
      <Item>
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
                title="Edit event"
                as="a"
                onClick={() => {
                  editEvent(event);
                  setToggleEdit(!toggleEdit);
                }}
              >
                <Icon name="edit" />
              </Label>
            )}

            {event.user_id === null && canEdit === true && (
              <Label
                title="Delete event"
                as="a"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(locationDeleteEvent(event.id, events));
                }}
              >
                <Icon name="trash" />
              </Label>
            )}

            {user_id === event.user_id && <InviteModal event_id={event.id} />}
          </Item.Extra>
        </Item.Content>
      </Item>
      {toggleEdit && (
        <EventLocUpdate
          event={event}
          events={events}
          eventToEdit={eventToEdit}
          setEventToEdit={setEventToEdit}
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
        />
      )}
    </>
  );
};

export default Event;
