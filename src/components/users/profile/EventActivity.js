import React from 'react'
import { Feed, Divider } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import "../MobileStyle.css"
import { useHistory } from 'react-router-dom'

const EventActivity = ({ user, event }) => {
  const curr_user = useSelector(({ user }) => user.username);
  const history = useHistory();
  return (
    <>
      <Feed.Event id="example">
        <Feed.Label image={user.profile_image} />
        <Feed.Content>
          <Feed.Summary>
            <Feed.User
              as="a"
              href={
                user.username !== curr_user
                  ? `/users/${user.username}`
                  : `/users/dash/profile`
              }
            >
              {user.username}
            </Feed.User>{" "}
            {event.response
              ? "was invited to an event at "
              : "posted an event at "}
            {event.business_name}
          </Feed.Summary>
          <br />
          <Feed.Summary
            as="a"
            onClick={() =>
              history.push(`/locations/${event.location_id}/events`)
            }
          >
            {event.title}
          </Feed.Summary>
          <Feed.Extra text>{event.description}</Feed.Extra>
          <Feed.Meta>
            <Feed.Like icon="thumbs up" /> 13 Likes{" "}
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
      <Divider />
    </>
  );
};

export default EventActivity;
