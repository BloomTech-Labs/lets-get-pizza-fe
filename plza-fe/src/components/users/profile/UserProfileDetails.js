import React, {useEffect} from 'react'
import { Image } from 'semantic-ui-react'
import {useSelector} from 'react-redux'
const UserProfileDetails = () => {
    const user = useSelector(({user}) => user)

    useEffect(() => {
        console.log(user)
    }, [])


    return (
        <div className='detail-container-ch'>
         <section className='profile-img-name-ch'>
           <img className='profile-image-ch' src={user.profile_image} />
           <div className='name-shop-ch'>
            <h1 className='profile-name-ch'>{user.username}</h1>
    <h3>{user.favShopDetails.username}</h3>
           </div>
         </section>
        </div>
    )
}

export default UserProfileDetails