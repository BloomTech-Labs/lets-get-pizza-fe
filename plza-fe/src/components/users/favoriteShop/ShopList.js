import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import ShopCard from "./ShopCard";

const ShopList = ({ userId }) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    API.get(`locations/${userId.favorite_pizza_shop}`)
      .then((res) => {
        console.log(res.data);
        setLocation(res.data.location);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId]);

  return <ShopCard location={location} />;
};

export default ShopList;
