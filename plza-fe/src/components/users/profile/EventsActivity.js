import React from "react";
import ActivityCard from "./ActivityCard";

export default function EventsActivity(props) {
  return (
    <div style={{ borderBottom: "1px solid black", padding: "5%" }}>
      <div className="img-head-ch-ch">
        <img src={props.user.profile_image} className="img-ch-ch" />
        <h4 style={{ marginTop: "0" }}>
          {props.user.username} posted an Event!
        </h4>
      </div>
      <ActivityCard event={props.evt} />
    </div>
  );
}
