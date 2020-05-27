import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendData } from '../../../redux/actions/friendActions'
import ProfileDetails from './ProfileDetails'
import { Container } from 'semantic-ui-react'


const FriendProfile = () => {
    const { username } = useParams()
    const dispatch = useDispatch()
    const friend = useSelector(({friend}) => friend)

    useEffect(() => {
        dispatch(getFriendData(username))
    }, [username])

    return (
        <Container style={{ width: "60%", margin: "0 auto" }}>
            <ProfileDetails user={friend} />
        </Container>
    )
}

export default FriendProfile