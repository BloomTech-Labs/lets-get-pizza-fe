import React from "react";
import { TabPane, Item, Rating } from "semantic-ui-react";

const Reviews = ({ reviews }) => (
  <TabPane>
    <Item.Group divided>
      {reviews.map(review => (
        <Item key={review.id}>
          <Item.Content>
            <Item.Header>
              {review.review_title}
              <Rating
                disabled
                rating={review.rating}
                maxRating={5}
                style={{ marginLeft: "15px" }}
              />
            </Item.Header>
            <Item.Description>{review.review_text}</Item.Description>
            <Item.Extra>Posted by {review.username}</Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </TabPane>
);

export default Reviews;
