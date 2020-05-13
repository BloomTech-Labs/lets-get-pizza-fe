import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "semantic-ui-react";
import UserReview from "./UserReview";
import { reviewsByUser } from "../../../redux/actions/userActions.js";

const UserReviewsList = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewsByUser(user.id));
  }, [dispatch, user.id]);

  return user.reviews.length === 0 ? (
    <div>
      <p>No Reviews</p>
    </div>
  ) : (
    <Item.Group divided>
      {user.reviews.map((review) => (
        <UserReview key={review.id} review={review} />
      ))}
    </Item.Group>
  );
};

export default UserReviewsList;
