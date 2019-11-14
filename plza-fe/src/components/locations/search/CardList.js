import React from "react";
import Card from "./Card";

export default function CardList(props) {
  return props.venues.map(venue => <Card venue={venue} />);
}
