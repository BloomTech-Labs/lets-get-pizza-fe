import React, { useEffect } from 'react'
import { Grid, Image, Header, Segment } from 'semantic-ui-react'
import RenderedButton from './RenderedButton';
import { useDispatch } from 'react-redux';
import { getAllFriends } from '../../../redux/actions/friendActions';
import { useHistory, useLocation } from 'react-router-dom';
import { getUserFriends } from '../../../redux/actions/userActions';


const ProfileAbout = ({ user }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { pathname } = useLocation()

    useEffect(() => {
        !pathname.includes('dash') ? 
        dispatch(getAllFriends(user.id)) :
        dispatch(getUserFriends(user.id))
    }, [user.id, dispatch])
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
                {!pathname.includes('dash') &&
                <Header className='friends-link' onClick={() => {history.push(`/users/${user.username}/friends`)}}>
                    {user.friends.length} {user.friends.length > 1 || user.friends.length === 0 ? 'Friends' : 'Friend'}
                </Header>
                }
                <Segment>{user.bio}</Segment>
            </Grid.Column>
            </Grid.Row>
        </>
    )
}

export default ProfileAbout