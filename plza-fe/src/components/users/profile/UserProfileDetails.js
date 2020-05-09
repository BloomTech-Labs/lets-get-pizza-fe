import React, {useEffect} from 'react'
import { Segment } from 'semantic-ui-react'
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
            <span className='fav-shop-heading-ch'>Favorite Pizza Shop</span>
    <h3 className='fav-shop-title-ch'>{user.favShopDetails.username}</h3>
           </div>
         </section>
         <div className='bio-activity-ch'>
         <section className='user-bio-ch'>
    <p className='bio-text-ch'>{user.bio}</p>
         </section>
         <section className='activity-container-ch'>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


  </section>
         </div>
        </div>
    )
}

export default UserProfileDetails