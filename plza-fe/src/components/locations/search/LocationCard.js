import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Placeholder, Button, Icon } from "semantic-ui-react";

import processVenue from "../../../utils/processVenue";

export default function LocationCard({ loading, venue }) {
  const history = useHistory();

  return (
    <Card>
      <Card.Content>
        {loading ? (
          <Placeholder>
            <Placeholder.Header></Placeholder.Header>
          </Placeholder>
        ) : (
          <>
            <Card.Header>{venue.name}</Card.Header>
            <Card.Meta>{venue.address.split(",")[0]}</Card.Meta>
            <Card.Description></Card.Description>
          </>
        )}
      </Card.Content>
      {/* Creates a "button" which processes */}
      <Button
        onClick={event => processVenue(event, history)}
        fsid={venue.foursquare_id ? `${venue.foursquare_id}` : null}
        lid={venue.location_id ? `${venue.location_id}` : null}
      >
        Details
        <Icon name="arrow right" />
      </Button>
    </Card>
  );
}
