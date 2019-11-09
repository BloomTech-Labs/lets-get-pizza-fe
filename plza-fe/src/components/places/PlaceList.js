import React, { useState, useEffect } from "react";
import { Marker } from "react-map-gl";

import Map from "../Map";
import API from "../../utils/API";

export default function PlaceList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    API.get("/api/locations/map")
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="places">
      <h1>Places</h1>
      <Map>
        {locations.map(location => (
          <Marker
            key={location.foursquare_id}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            {location.name}
          </Marker>
        ))}
      </Map>
    </div>
  );
}
