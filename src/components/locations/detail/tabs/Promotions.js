import React from "react";
import { Item, Label, Icon } from "semantic-ui-react";
import Moment from "react-moment";

const Promotions = ({ content }) => (
  <Item.Group divided>
    {content.map(promotion => (
      <Item key={promotion.id}>
        <Item.Content>
          <Item.Header>{promotion.title}</Item.Header>
          <Item.Description>{promotion.text}</Item.Description>
          <Item.Extra>
            <Label>
              <Icon name="calendar check" />
              <Moment format="MMM Do" date={promotion.start_date} /> to{" "}
              <Moment format="MMM Do" date={promotion.end_date} />
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
);

export default Promotions;
