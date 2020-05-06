import React, { useState, useEffect } from "react";
import API from '../../../utils/API';
import {useSelector, useDispatch} from 'react-redux'
import ShopList from "./ShopList";
import "./favoriteShop.css";

const FavoriteShop = () => {
  const user = useSelector(({user}) => user)
  console.log('right here brother', user.id)

  return (
    <div>
      <p className="heading-favorite-shop-ch">{`${user.display_name}'s favorite pizza shop`}</p>
      <ShopList />
    </div>
  );
};
export default FavoriteShop;
