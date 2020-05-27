import React from 'react'
import { Feed } from 'semantic-ui-react'
import EventActivity from './EventActivity'
import ReviewActivity from './ReviewActivity'

const ActivityFeed = ({ activities, user }) => {
    return (
        <Feed size="large" style={{width: '80%', margin: '0 auto'}}>
            {activities.map((activity, index) => (
                activity.start_time ? 
                <EventActivity key={index} user={user} event={activity}/> :
                <ReviewActivity key={index} user={user} review={activity} />
            ))}
        </Feed>
    )
}

export default ActivityFeed