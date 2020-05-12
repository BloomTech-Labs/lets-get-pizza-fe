import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import ActivityCardList from "./ActivityCardList";

const UserProfileDetails = () => {
  const user = useSelector(({ user }) => user);

  return (
    <div className="detail-container-ch">
      <section className="profile-img-name-ch">
        <div className="picture-btn-ch">
          <img className="profile-image-ch" src={user.profile_image} />
          <Button>
            <a href="/users/dash/settings">Edit Profile</a>
          </Button>
          <section className="user-bio-ch">
            <p className="bio-text-ch">{user.bio}</p>
          </section>
        </div>
        <div className="name-shop-ch">
          <h1 className="profile-name-ch">{user.username}</h1>
          <span className="fav-shop-heading-ch">Favorite Pizza Shop</span>
          <h3 className="fav-shop-title-ch">{user.favShopDetails.username}</h3>
        </div>
      </section>
      <div className="bio-activity-ch">
        <div>
          <h2 className="head-act-ch">Activity</h2>
          <section className="activity-container-ch">
            <ActivityCardList />
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetails;
