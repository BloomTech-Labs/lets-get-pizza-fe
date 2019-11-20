import React from "react";
import Card from "./CardItem";

export default function CardList(props) {
  return props.venues.map((venue, index) => <Card key={index} venue={venue} />);
}
