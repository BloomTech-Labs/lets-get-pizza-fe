import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eventsByUser,
  locationByUser,
  reviewsByUser,
} from "../../../redux/actions/userActions";
import ActivityCard from "./ActivityCard";
import ReviewCard from "./ReviewCard";

const ActivityCardList = () => {
  const user = useSelector(({ user }) => user);
  const reviews = useSelector(({ user }) => user.reviews);
  const dispatch = useDispatch();
  const events = useSelector(({ user }) => user.events);

  useEffect(() => {
    dispatch(eventsByUser(user.id));
    dispatch(locationByUser(user.favorite_pizza_shop));
    dispatch(reviewsByUser(user.id));
    console.log(user);
  }, []);

  const activity = reviews.concat(events);
  console.log(activity, " super array");
  // const userReviews = reviews.map((review) => {
  //   reviews.filter(() => {
  //     return user.id === review.user_id;
  //   });
  //   return review;
  // });
  // console.log(userReviews);

  return (
    <div style={{ width: "800px" }}>
      {activity.map((evt) => {
        if (evt.start_time) {
          return (
            <div style={{ borderBottom: "1px solid black", padding: "5%" }}>
              <div className="img-head-ch-ch">
                <img src={user.profile_image} className="img-ch-ch" />
                <h4>{user.username} posted an Event!</h4>
              </div>

              <ActivityCard event={evt} />
            </div>
          );
        } else if (evt.rating) {
          return (
            <div style={{ borderBottom: "1px solid black", padding: "5%" }}>
              <div className="img-head-ch-ch">
                <img src={user.profile_image} className="img-ch-ch" />
                <h4>{user.username} posted a Review!</h4>
              </div>
              <ReviewCard review={evt} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ActivityCardList;
