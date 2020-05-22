import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ActivityRender from "./ActivityRender";
import { useLocation } from "react-router-dom";
import { getFriendFavoriteShop, reviewsByFriend, eventsByFriend } from "../../../redux/actions/friendActions";
import {
  eventsByUser,
  locationByUser,
  reviewsByUser,
} from "../../../redux/actions/userActions";

const ActivityCardList = ({user}) => {
  const { pathname } = useLocation()
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch user actions if path includes 'dash'
    if(pathname.includes('dash')){
      dispatch(eventsByUser(user.id));
      dispatch(locationByUser(user.favorite_pizza_shop));
      dispatch(reviewsByUser(user.id));
    }else{
      // dispatch friend actions if not on dashboard
      dispatch(eventsByFriend(user.id));
      dispatch(getFriendFavoriteShop(user.favorite_pizza_shop));
      dispatch(reviewsByFriend(user.id));
    }
  }, [user.id, user.favorite_pizza_shop]);
  const activity = user.reviews.concat(user.events);
  return <ActivityRender user={user} activity={activity} />;
};

export default ActivityCardList;
