import React from 'react'
import { Feed, Divider, Rating } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const ReviewActivity = ({ user, review }) => {
  const curr_user = useSelector(({user}) => user.username)
    return (
        <>
        <Feed.Event>
            <Feed.Label image={user.profile_image} />
            <Feed.Content>
                <Feed.Summary>
                  <Feed.User as="a" href={user.username !== curr_user ? `/users/${user.username}` : `/users/dash/profile`}>
                    {user.username}
                  </Feed.User>{" "}
                  posted a review of {review.business_name}
                </Feed.Summary>
                <br />
                <Feed.Summary>
                    {review.review_title} <Rating defaultRating={review.rating} maxRating={5} disabled/>
                </Feed.Summary>
                <Feed.Extra text>
                  {review.review_text}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like icon="thumbs up" /> 13 Likes 
                </Feed.Meta>{" "}
              </Feed.Content>
        </Feed.Event>
        <Divider />
        </>
    )
}

export default ReviewActivity