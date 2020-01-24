import React from "react";
import TimeAgo from "react-timeago";
import { TabPane, Item } from "semantic-ui-react";

const Promotions = ({ promotions }) => (
  <TabPane>
    <Item.Group divided>
      {promotions.map(promotion => (
        <Item key={promotion.id}>
          <Item.Content>
            <Item.Header>{promotion.title}</Item.Header>
            <Item.Description>{promotion.text}</Item.Description>
            <Item.Extra>
              Expires <TimeAgo date={promotion.end_date} />
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </TabPane>
);

export default Promotions;
