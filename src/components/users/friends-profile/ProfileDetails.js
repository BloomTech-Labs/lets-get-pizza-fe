import React from 'react'
import { Grid } from 'semantic-ui-react'
import ProfileAbout from './ProfileAbout'
import ActivityContainer from './ActivityContainer'

const ProfileDetails = ({ user }) => {
    return (
        <Grid divided='vertically' verticalAlign='middle'>
            <ProfileAbout user={user} />
            <ActivityContainer user={user} />
        </Grid>
    )
}

export default ProfileDetails