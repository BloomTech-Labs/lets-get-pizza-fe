import React, { useEffect } from "react";

const ReviewCard = ({ review }) => {
  //   const start = new Intl.DateTimeFormat("en-US").format(
  //     new Date(event.start_time)
  //   );
  //   const end = new Intl.DateTimeFormat("en-US").format(new Date(event.end_time));
  return (
    <div className="act-card-ch">
      <h2>
        {review.review_title} at {review.business_name}
      </h2>
      <p>{review.address}</p>
      <p>{review.review_text}</p>
      <span>
        <b>Rating:</b> {review.rating}/5
      </span>
    </div>
  );
};

export default ReviewCard;
