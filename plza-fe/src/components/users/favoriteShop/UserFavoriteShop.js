import React, { useState, useEffect } from "react";
import API from '../../../utils/API';
import { curr_user } from "../../../utils/auth";
import ShopList from "./ShopList";
import "./favoriteShop.css";

const FavoriteShop = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    API.get(`users/${curr_user.id}`)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <p className="heading-favorite-shop-ch">{`${curr_user.display_name}'s favorite pizza shop`}</p>
      <ShopList userId={userInfo} />
    </div>
  );
};
export default FavoriteShop;
