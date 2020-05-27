import React from "react";
import { Item, Rating, Label, Icon } from "semantic-ui-react";

const Reviews = ({ content }) => (
  <Item.Group divided>
    {content.map(review => (
      <Item key={review.id}>
        <Item.Content>
          <Item.Header>{review.review_title}</Item.Header>
          <Item.Description>{review.review_text}</Item.Description>
          <Item.Extra>
            <Label title="Posted by">
              <Icon name="user" />
              {review.display_name ? review.display_name : review.username}
            </Label>

            <Label title="User rating">
              <Rating
                size="mini"
                disabled
                rating={review.rating}
                maxRating={5}
              />
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
);

export default Reviews;
