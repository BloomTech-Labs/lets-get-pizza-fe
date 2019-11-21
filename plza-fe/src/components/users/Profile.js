import React from "react";
import {curr_user, curr_location} from '../../utils/auth'

//THIS NEEDS TO SPLIT INTO TWO DIFFERENT COMPONENTS
export default function Profile() {
  return <div> 
    { 
      curr_user ? 
        <div className="profile">
          <h1>Welcome, {curr_user.display_name}</h1>
          <p>{curr_user.email}, {curr_user.username}</p>
          <p>{curr_user.display_location}</p>
          <p>{curr_user.dietary_preference}, {curr_user.favorite_pizza_toppings}</p>
        </div> : "" 
    }
    { 
      curr_location ? 
        <div className="profile">
          <h1>Welcome, {curr_location.username}</h1>
          <h3>{curr_location.business_name}</h3>
          <p>{curr_location.address}</p>
          <p>Lat/Lng: {curr_location.latitude}, {curr_location.longitude}</p>
        </div> : "" 
    }

  </div>
}
