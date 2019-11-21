import React from "react";
import {curr_user} from '../../utils/auth'

export default function Register() {
  return (
    <div className="profile">
      <h1>Welcome, {curr_user.display_name}</h1>
      <p>{curr_user.email}, {curr_user.username}</p>
      <p>{curr_user.display_location}</p>
      <p>{curr_user.dietary_preference}, {curr_user.favorite_pizza_toppings}</p>
    </div>
  );
}
