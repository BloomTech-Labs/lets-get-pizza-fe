import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import ShopCard from "./ShopCard";
import {locationByUser} from '../../../redux/actions/userActions.js'

const ShopList = () => {
  const [favShopId, favShopDetails] = useSelector(({user}) => [user.favorite_pizza_shop, user.favShopDetails])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(locationByUser(favShopId))
  }, []);

  return (
    <ShopCard location={favShopDetails}/>
  );
};

export default ShopList;
