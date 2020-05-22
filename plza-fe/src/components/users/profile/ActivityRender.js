import React from "react";
import EventsActivity from "./EventsActivity";
import ReviewActivity from "./ReviewActivity";

export default function ActivityRender(props) {
  return (
    <div style={{ width: "800px" }}>
      {props.activity.map((evt, index) => {
        if (evt.start_time) {
          return <EventsActivity key={index} user={props.user} evt={evt} />;
        } else if (evt.rating) {
          return <ReviewActivity key={index} user={props.user} evt={evt} />;
        }
      })}
    </div>
  );
}
