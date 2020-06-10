import React, { useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  eventsByFriend,
  reviewsByFriend,
  getFriendFavoriteShop,
} from "../../../redux/actions/friendActions";
import {
  eventsByUser,
  locationByUser,
  reviewsByUser,
} from "../../../redux/actions/userActions";
import ActivityFeed from "./ActivityFeed";
import FriendsList from "../FriendsComp/FriendsList";

const ActivityContainer = ({ user }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch user actions if path includes 'dash'
    if (pathname.includes("dash")) {
      dispatch(eventsByUser(user.id));
      dispatch(locationByUser(user.favorite_pizza_shop));
      dispatch(reviewsByUser(user.id));
    } else {
      // dispatch friend actions if not on dashboard
      dispatch(eventsByFriend(user.id));
      dispatch(getFriendFavoriteShop(user.favorite_pizza_shop));
      dispatch(reviewsByFriend(user.id));
    }
  }, [user.id, user.favorite_pizza_shop]);
  const activities = user.reviews.concat(user.events);
  return (
    <Grid.Row>
      {!pathname.includes("friends") ? (
        <>
          <Header size="huge" textAlign="center" style={{ width: "100%" }}>
            Recent Activity
          </Header>
          <ActivityFeed activities={activities} user={user} />
        </>
      ) : (
        <FriendsList user={user} />
      )}
    </Grid.Row>
  );
};

export default ActivityContainer;
