import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eventsByUser,
  locationByUser,
  reviewsByUser,
} from "../../../redux/actions/userActions";

import ActivityRender from "./ActivityRender";

const ActivityCardList = () => {
  const user = useSelector(({ user }) => user);
  const reviews = useSelector(({ user }) => user.reviews);
  const dispatch = useDispatch();
  const events = useSelector(({ user }) => user.events);
  useEffect(() => {
    dispatch(eventsByUser(user.id));
    dispatch(locationByUser(user.favorite_pizza_shop));
    dispatch(reviewsByUser(user.id));
  }, []);
  const activity = reviews.concat(events);
  return <ActivityRender user={user} activity={activity} />;
};

export default ActivityCardList;
