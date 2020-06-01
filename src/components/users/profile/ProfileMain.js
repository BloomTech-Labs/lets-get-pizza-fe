import React from 'react'
import { useSelector } from 'react-redux';
import ProfileDetails from './ProfileDetails';

const ProfileMain = () => {
    const user = useSelector(({ user }) => user);
    
    return(
        <div>
            <ProfileDetails user={user} />
        </div>
    )
}


export default ProfileMain