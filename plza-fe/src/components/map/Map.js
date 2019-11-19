import React, { useState } from "react";
import {
  GoogleMapProvider,
  MapBox,
  Marker,
  InfoWindow
} from "@googlemap-react/core";

export default function Map({ userLocation, width, height, venues }) {
  const [selectedMarker, setSelectedMarker] = useState({});

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
          id={`marker-${venue.foursquare_id}`}
          key={venue.foursquare_id}
          opts={{
            position: { lat: venue.latitude, lng: venue.longitude }
          }}
          onClick={() => {
            setSelectedMarker({
              id: `marker-${venue.foursquare_id}`,
              ...venue
            });
          }}
        />
      ))}

      <InfoWindow anchorId={selectedMarker.id} visible>
        <h2>{selectedMarker.name}</h2>
        <p>{selectedMarker.address}</p>
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
