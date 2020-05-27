import React from 'react'
import { Grid, Image, Header, Segment } from 'semantic-ui-react'
import RenderedButton from '../profile/RenderedButton';


const ProfileAbout = ({ user }) => {
    return (
        <>
            <Grid.Row columns={2}>
            <Grid.Column textAlign='center' computer={8} mobile={16}>
                <Image src={user.profile_image} circular centered />
                <RenderedButton user={user} />
            </Grid.Column>
            <Grid.Column textAlign='center' computer={8} mobile={16}>
                <Header size='huge'>{user.username}</Header>
                <Header>Favorite Pizza Shop | <a href={`/locations/${user.favShopDetails.id}`}>{user.favShopDetails.business_name}</a></Header>
                <Segment>{user.bio}</Segment>
            </Grid.Column>
            </Grid.Row>
        </>
    )
}

export default ProfileAbout