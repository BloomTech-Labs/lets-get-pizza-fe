import React from "react";
import { Item } from "semantic-ui-react";

const Promotions = ({ content }) => (
  <Item.Group divided>
    {content.map(promotion => (
      <Item key={promotion.id}>
        <Item.Content>
          <Item.Header>{promotion.title}</Item.Header>
          <Item.Description>{promotion.text}</Item.Description>
          <Item.Extra>Expires {promotion.end_date}</Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
);

export default Promotions;
