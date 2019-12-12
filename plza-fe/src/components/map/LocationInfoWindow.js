import React from "react";
import { useHistory } from "react-router-dom";
import { InfoWindow } from "@googlemap-react/core";
import { Button } from "semantic-ui-react";
import processVenue from "../../utils/processVenue";

export default function LocationInfoWindow({ marker, isVisible }) {
  // Used by processVenue to navigate to the clicked location
  const history = useHistory();

  return (
    <InfoWindow anchorId={marker.id} visible={isVisible}>
      <h2>{marker.name}</h2>
      <p>{marker.address}</p>
      {/* Creates a "button" which processes whether or not there is a foursquare/*/}
      <Button
        onClick={event => processVenue(event, history)}
        fsid={marker.foursquare_id ? `${marker.foursquare_id}` : null}
        lid={marker.location_id ? `${marker.location_id}` : null}
      >
        See The Deets ->
      </Button>
    </InfoWindow>
  );
}
