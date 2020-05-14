import React, { useEffect } from "react";

const ActivityCard = ({ event }) => {
  const start = new Intl.DateTimeFormat("en-US").format(
    new Date(event.start_time)
  );
  const end = new Intl.DateTimeFormat("en-US").format(new Date(event.end_time));
  return (
    <div className="act-card-ch">
      <h2>
        {event.title} at {event.business_name}
      </h2>
      <p>{event.description}</p>
      <p>
        <b>Where:</b> {event.address}
      </p>
      <p>
        <b>When:</b> {start} until {end}
      </p>
    </div>
  );
};

export default ActivityCard;
