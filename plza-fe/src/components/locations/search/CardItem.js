import React from "react";
import { useHistory } from "react-router-dom";
import processVenue from "../../../utils/processVenue";

export default function Card({ venue }) {
  const history = useHistory();

  return (
    <div className="card">
      <h3>{venue.name}</h3>
      <p>{venue.address}</p>
      {/* Creates a "button" which processes */}
      <p
        onClick={event => processVenue(event, history)}
        fsid={venue.foursquare_id ? `${venue.foursquare_id}` : null}
        lid={venue.location_id ? `${venue.location_id}` : null}
      >
        See The Deets ->
      </p>
    </div>
  );
}
