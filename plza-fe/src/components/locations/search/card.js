import React from "react";

export default function Card({ venue }) {
  return (
    <div className="card">
      <h3>{venue.name}</h3>
      <p>{venue.address}</p>
    </div>
  );
}
