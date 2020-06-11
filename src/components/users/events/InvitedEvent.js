import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Item, Label } from "semantic-ui-react";
import Moment from "react-moment";
import { eventsByUser } from "../../../redux/actions/userActions";
import API from "../../../utils/API";

const InvitedEvent = ({ event }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleInvite = response => {
    API.put(`/events/${event.id}/invite/${event.event_invite_id}`, { response })
        .then(res => {
            dispatch(eventsByUser(user.id))
        })
        .catch(err => {
            console.log(err)
        })
  }
  return (
    <>
      <Item>
        {/** Place Business Image Here **/}
        {/* <Item.Image src="http://place-puppy.com/250x200" /> */}

        <Item.Content>
          <Item.Header as="a" href={`/locations/${event.location_id}/events`}>
            {event.title}
          </Item.Header>
          <Item.Meta>Created By - {event.username}</Item.Meta>
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
              title="Accept"
              as={event.response === "accepted" ? 'div' : 'a'}
              onClick={() => {
                handleInvite("accepted")
              }}
            >
              <Icon name="check" />
              <Label.Detail>{event.response === "accepted" ? 'Accepted' : 'Accept'}</Label.Detail>
            </Label>

            <Label
              title="Interested"
              as={event.response === "interested" ? 'div' : 'a'}
              onClick={(e) => {
                e.stopPropagation();
                handleInvite("interested")
              }}
            >
              <Icon name="question" />
              <Label.Detail>{event.response === "interested" ? 'Interested' : 'Maybe'}</Label.Detail>
            </Label>

            <Label
              title="Decline"
              as={event.response === "declined" ? 'div' : 'a'}
              onClick={(e) => {
                e.stopPropagation();
                handleInvite("declined")
              }}
            >
              <Icon name="x" />
              <Label.Detail>{event.response === "declined" ? 'Declined' : 'Decline'}</Label.Detail>
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    </>
  );
};

export default InvitedEvent;
