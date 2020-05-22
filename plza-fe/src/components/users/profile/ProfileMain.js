import React from 'react'
import UserProfileDetails from './UserProfileDetails'
import './userProfile.css'
import { useSelector } from 'react-redux';

const ProfileMain = () => {
    const user = useSelector(({ user }) => user);
    
    return(
        <div>
           <UserProfileDetails user={user} />
        </div>
    )
}


export default ProfileMain