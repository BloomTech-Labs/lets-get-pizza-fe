import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Item, Label } from "semantic-ui-react";
import Moment from "react-moment";
import EventUpdate from "./EventUpdate";
import { userDeleteEvent } from "../../../redux/actions/userActions";
import InviteModal from "../../items/InviteModal";

const UserEvent = ({ event }) => {
  const user = useSelector(state => state.user)
  const [toggleEdit, setToggleEdit] = useState(false);
  const dispatch = useDispatch();
  const [eventToEdit, setEventToEdit] = useState({});

  const editEvent = (event) => {
    setEventToEdit(event);
  };

  return (
    <>
      <Item>
        {/** Place Business Image Here **/}
        {/* <Item.Image src="http://place-puppy.com/250x200" /> */}

        <Item.Content>
          <Item.Header as="a" href={`/locations/${event.location_id}/events`}>
            {event.title}
          </Item.Header>
          <Item.Meta>Created By - You</Item.Meta>
          <Item.Description>{event.description}</Item.Description>
          <Item.Meta>
            <span className="">{event.business_name}</span>
          </Item.Meta>
          <Item.Meta>
            <span className="">{event.address}</span>
          </Item.Meta>
          <Item.Extra>
            <Label title="Event date">
              <Icon name="calendar alternate" />
              <Moment format="ddd" date={event.start_time} />
              &#44;&#xa0;&#xa0;
              <Moment format="MMMM D" date={event.start_time} />
            </Label>

            <Label title="Event time">
              <Icon name="clock" />
              <Moment format="h:mm a" date={event.start_time} />
              &mdash;
              <Moment format="h:mm a" date={event.end_time} />
            </Label>

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

            <Label
              title="Delete event"
              as="a"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(userDeleteEvent(event.id, user));
              }}
            >
              <Icon name="trash" />
            </Label>
            {user.id === event.user_id && <InviteModal event_id={event.id}/>}
          </Item.Extra>
        </Item.Content>
      </Item>
      {toggleEdit && (
        <EventUpdate
          event={event}
          events={user.events}
          eventToEdit={eventToEdit}
          setEventToEdit={setEventToEdit}
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
        />
      )}
    </>
  );
};

export default UserEvent;
