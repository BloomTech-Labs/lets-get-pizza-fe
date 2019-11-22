import React from "react";
import LocationItem from "./LocationItem";
import { Card } from "semantic-ui-react";

export default function LocationList(props) {
  return (
    <Card.Group>
      {props.venues.map((venue, index) => (
        <LocationItem {...props} key={index} venue={venue} />
      ))}
      ;
    </Card.Group>
  );
}
