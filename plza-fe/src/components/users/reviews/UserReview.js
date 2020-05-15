import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Item, Label, Rating } from "semantic-ui-react";
import { userDeleteReview } from "../../../redux/actions/userActions.js"
import ReviewUpdate from "./ReviewUpdate.js";

const UserReview = ({ review }) => {
  const user = useSelector((state) => state.user);
  const [toggleEdit, setToggleEdit] = useState(false);
  const dispatch = useDispatch();
  const [reviewToEdit, setReviewToEdit] = useState({});

  const editReview = (review) => {
    setReviewToEdit(review);
  };

  return (
    <>
      <Item>
        <Item.Content>
          <Item.Header as="a" href={`/locations/${review.location_id}/reviews`}>
            {review.review_title}
          </Item.Header>
          <Item.Description>{review.review_text}</Item.Description>
          <Item.Meta>
            <span className="">{review.business_name}</span>
          </Item.Meta>
          <Item.Meta>
            <span className="">{review.address}</span>
          </Item.Meta>
          <Item.Extra>
            <Label title="User rating">
              <Rating
                size="mini"
                disabled
                rating={review.rating}
                maxRating={5}
              />
            </Label>
            <Label
              title="Edit review"
              as="a"
              onClick={() => {
                editReview(review);
                setToggleEdit(!toggleEdit);
              }}
            >
              <Icon name="edit" />
            </Label>
            <Label
              title="Delete review"
              as="a"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(userDeleteReview(review.id, user));
              }}
            >
              <Icon name="trash" />
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
      {toggleEdit && (
        <ReviewUpdate
          review={review}
          reviews={user.reviews}
          reviewToEdit={reviewToEdit}
          setReviewToEdit={setReviewToEdit}
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
        />
      )}
    </>
  );
};

export default UserReview;
