import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";

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
          <Label>{`${new Date(event.start_time).toLocaleString("en-US")}`}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default UserEvent;
