import React from "react";
import { Marker } from "@googlemap-react/core";

const LocationMarker = ({ venue, setVisible, setMarker }) => (
  <Marker
    id={`marker-${venue.location_id || venue.foursquare_id}`}
    opts={{
      position: { lat: venue.latitude, lng: venue.longitude }
    }}
    onClick={() => {
      // Start displaying the InfoWindow and set this as
      // the selected marker
      setVisible(true);
      setMarker({
        id: `marker-${venue.location_id || venue.foursquare_id}`,
        ...venue
      });
    }}
  />
);

export default LocationMarker;
