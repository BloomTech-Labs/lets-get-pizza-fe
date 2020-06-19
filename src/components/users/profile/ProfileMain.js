<<<<<<< HEAD
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import API from "../../../utils/API";
=======
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ProfileDetails from './ProfileDetails';
import "../../../components/users/MobileStyle.css";
import API from '../../../utils/API';
>>>>>>> ea0016aa9e5c2d2c15bb96f926dabc9a6d0bf70f

const ProfileMain = () => {
  const [user, username] = useSelector(({ user }) => [user, user.username]);

  useEffect(() => {
    API.post(`/auth/user/refresh`, { username })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ProfileDetails user={user} />
    </div>
  );
};

export default ProfileMain;
