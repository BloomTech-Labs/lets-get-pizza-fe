import React from "react";

const Place = props => (
  <div className="place">
    <h1>{props.business_name}</h1>
    <p>{props.official_description}</p>
    <p>{props.store_bio}</p>
    <p>{props.order_service}</p>
    <p>{props.address}</p>
  </div>
);

export default Place;
