import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import Moment from "react-moment";

const UserEvent = ({event}) => {
  console.log(event);
  return (
    <Item>
      <Item.Image src="http://place-puppy.com/250x200" />

      <Item.Content>
        <Item.Header as="a">{event.title}</Item.Header>
        <Item.Description>{event.description}</Item.Description>
        <Item.Meta>
          <span className="">Business Name</span>
        </Item.Meta>
        <Item.Meta>
          <span className="">Business Address</span>
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
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default UserEvent;
