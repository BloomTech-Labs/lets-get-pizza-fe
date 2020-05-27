import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

import processVenue from "../../../utils/processVenue";

export default function LocationCard({ loading, venue }) {
  const history = useHistory();

  return (
    <Card>
      <Card.Content>
        <Card.Header>{venue.name}</Card.Header>
        <Card.Meta>{venue.address.split(",")[0]}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button
          primary
          onClick={event => processVenue(event, history)}
          fsid={venue.foursquare_id ? `${venue.foursquare_id}` : null}
          lid={venue.location_id ? `${venue.location_id}` : null}
        >
          Details
        </Button>
      </Card.Content>
    </Card>
  );
}
