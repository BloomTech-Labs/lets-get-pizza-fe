import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import API from "../../../utils/API";
import { USER_REVIEW_EDIT_SUCCESS } from "../../../redux/types/userTypes";
import { Rating, Button } from "semantic-ui-react";

const ReviewUpdate = ({
  review,
  reviewToEdit,
  setReviewToEdit,
  toggleEdit,
  setToggleEdit,
}) => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const saveReviewEdit = (values) => {
    API.put(`/reviews/${reviewToEdit.id}`, {
      ...values,
      rating: reviewToEdit.rating,
    })
      .then((res) => {
        const filterEditReview = user.reviews.filter(
          (review) => review.id !== res.data.id
        );
        const updatedReview = { ...review, ...res.data };

        dispatch({
          type: USER_REVIEW_EDIT_SUCCESS,
          payload: [...filterEditReview, updatedReview].sort(
            (a, b) => b.id - a.id
          ),
        });

        setReviewToEdit({
          review_title: "",
          review_text: "",
          rating: "",
        });
        setToggleEdit(!toggleEdit);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="ui tiny form" onSubmit={handleSubmit(saveReviewEdit)}>
      <div className="required field">
        <label>Title</label>
        <input
          name="review_title"
          ref={register({ required: true })}
          onChange={(e) =>
            setReviewToEdit({ ...reviewToEdit, review_title: e.target.value })
          }
          value={reviewToEdit.review_title}
        />
        {errors.review_title && (
          <span className="ui point red basic label">
            This field is required
          </span>
        )}
      </div>

      <div className="required field">
        <label>Review</label>
        <textarea
          rows="2"
          ref={register({ required: true })}
          name="review_text"
          type="text"
          onChange={(e) => {
            e.persist();
            setReviewToEdit({ ...reviewToEdit, review_text: e.target.value });
          }}
          value={reviewToEdit.review_text}
        />
      </div>

      <div className="required field">
        <label>Rating</label>
        <Rating
          maxRating={5}
          rating={reviewToEdit.rating}
          onRate={(e, { rating }) => {
            setReviewToEdit({ ...reviewToEdit, rating: rating });
          }}
          value={reviewToEdit.rating}
        />
      </div>

      <Button.Group style={{ margin: "1.5rem 0" }}>
        <Button color="black" onClick={() => setToggleEdit(!toggleEdit)}>
          Undo
        </Button>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Update"
          type="submit"
        />
      </Button.Group>
    </form>
  );
};

export default ReviewUpdate;
