import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import ProfilePicture from "./ProfilePicture";
import ActivityContainer from "./ActivityContainer";

const UserProfileDetails = (props) => {
  const user = useSelector(({ user }) => user);

  return (
    <div className="detail-container-ch">
      <section className="profile-img-name-ch">
        <ProfilePicture user={user} />
        <div className="name-shop-ch">
          <h1 className="profile-name-ch">{user.username}</h1>

          <h5 className="fav-shop-title-ch">
            <span className="fav-shop-heading-ch">Favorite Pizza Shop | </span>
            <a href={`/locations/${user.favShopDetails.id}`}>
              {user.favShopDetails.business_name}
            </a>
          </h5>
          <section className="user-bio-ch">
            <p>{user.bio}</p>
          </section>
        </div>
      </section>
      <ActivityContainer />
    </div>
  );
};

export default UserProfileDetails;
