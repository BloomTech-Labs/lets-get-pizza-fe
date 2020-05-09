import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eventsByUser,
  locationByUser,
} from "../../../redux/actions/userActions";
import ActivityCard from "./ActivityCard";

const ActivityCardList = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsByUser(user.id));
    dispatch(locationByUser(user.favorite_pizza_shop));
    console.log(user);
  }, []);

  return (
    <div>
      {user.events.map((evt) => (
        <ActivityCard event={evt} />
      ))}
    </div>
  );
};

export default ActivityCardList;
