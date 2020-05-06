import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import {useSelector, useDispatch} from 'react-redux'
import ShopCard from "./ShopCard";
import {locationByUser} from '../../../redux/actions/locationActions.js'

const ShopList = ({ userId }) => {
  // const [location, setLocation] = useState({});
  const user = useSelector(({user}) => user.favorite_pizza_shop)
  const location = useSelector(({location}) => location)
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(locationByUser(user))
    console.log(location, 'state of location')
  }, []);

  return (
    <ShopCard location={location.locations.location}/>
  );
};

export default ShopList;
