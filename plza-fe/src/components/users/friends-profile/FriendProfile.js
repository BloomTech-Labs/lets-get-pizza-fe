import React, { useEffect } from 'react'
import UserProfileDetails from '../profile/UserProfileDetails'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendData } from '../../../redux/actions/friendActions'


const FriendProfile = () => {
    const { username } = useParams()
    const dispatch = useDispatch()
    const friend = useSelector(({friend}) => friend)

    useEffect(() => {
        dispatch(getFriendData(username))
    }, [username])

    return (
        <>
            <UserProfileDetails user={friend} />
        </>
    )
}

export default FriendProfile