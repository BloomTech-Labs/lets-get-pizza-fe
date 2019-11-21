import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

import processVenue from "../../../utils/processVenue";

export default function LocationItem({ venue }) {
  const history = useHistory();

  return (
    <Card>
      <Card.Header>{venue.name}</Card.Header>
      <Card.Description>{venue.address}</Card.Description>
      {/* Creates a "button" which processes */}
      <Button
        onClick={event => processVenue(event, history)}
        fsid={venue.foursquare_id ? `${venue.foursquare_id}` : null}
        lid={venue.location_id ? `${venue.location_id}` : null}
      >
        See The Deets ->
      </Button>
    </Card>
  );
}
