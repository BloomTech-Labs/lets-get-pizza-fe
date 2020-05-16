import React from "react";
import ActivityCard from "./ActivityCard";
<<<<<<< HEAD
import { Image } from "semantic-ui-react";
=======
>>>>>>> master

export default function EventsActivity(props) {
  return (
    <div style={{ borderBottom: "1px solid black", padding: "5%" }}>
      <div className="img-head-ch-ch">
        <img src={props.user.profile_image} className="img-ch-ch" />
<<<<<<< HEAD
        <h4 style={{ marginTop: "0" }}>
          {props.user.username} posted an Event!
        </h4>
      </div>
=======
        <h4>{props.user.username} posted an Event!</h4>
      </div>

>>>>>>> master
      <ActivityCard event={props.evt} />
    </div>
  );
}
