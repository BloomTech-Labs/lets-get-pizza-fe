import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  GoogleMapProvider,
  MapBox,
  Marker,
  InfoWindow
} from "@googlemap-react/core";

import processVenue from "../../utils/processVenue";

export default function Map({ userLocation, width, height, venues }) {
  const history = useHistory();
  const [selectedMarker, setSelectedMarker] = useState({});
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  return (
    <GoogleMapProvider>
      <MapBox
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_TOKEN}
        opts={{
          center: {
            lat: userLocation.userLatitude,
            lng: userLocation.userLongitude
          },
          zoom: 14,
          clickableIcons: false,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "transit",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        }}
        style={{ width, height }}
      />
      {venues.map(venue => (
        <Marker
          id={`marker-${venue.foursquare_id || venue.location_id}`}
          key={venue.foursquare_id}
          opts={{
            position: { lat: venue.latitude, lng: venue.longitude }
          }}
          onClick={() => {
            // Start displaying the InfoWindow and set this as
            // the selected marker
            setInfoWindowVisible(true);
            setSelectedMarker({
              id: `marker-${venue.foursquare_id || venue.location_id}`,
              ...venue
            });
          }}
        />
      ))}

      <InfoWindow anchorId={selectedMarker.id} visible={infoWindowVisible}>
        <h2>{selectedMarker.name}</h2>
        <p>{selectedMarker.address}</p>
        {/* Creates a "button" which processes */}
        <p
          onClick={event => processVenue(event, history)}
          fsid={
            selectedMarker.foursquare_id
              ? `${selectedMarker.foursquare_id}`
              : null
          }
          lid={
            selectedMarker.location_id ? `${selectedMarker.location_id}` : null
          }
        >
          See The Deets ->
        </p>
      </InfoWindow>
    </GoogleMapProvider>
  );
}

Map.defaultProps = {
  width: "100%",
  height: "100vh",
  userLocation: {
    userLatitude: 0,
    userLongitude: 0
  }
};
