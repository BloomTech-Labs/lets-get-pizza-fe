import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { GoogleMapProvider, MapBox } from "@googlemap-react/core";

import LocationMarker from "./LocationMarker";
import LocationInfoWindow from "./LocationInfoWindow";

export default function Map({ userLocation, width, height, venues }) {
  //Which marker is showing
  const [selectedMarker, setSelectedMarker] = useState({});
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  return (
    <GoogleMapProvider>
      <MapBox
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_TOKEN}
        opts={{
          //Center the map based on the incoming position
          center: {
            lat: userLocation.userLatitude,
            lng: userLocation.userLongitude
          },
          //Set the zoom. The higher, the closer to Earth.
          zoom: 14,
          //Next two settings garuntee that no extra fields/settings are show, just our markers
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
          ],
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          mapTypeControlOptions: { mapTypeIds: ["roadmap"] }
        }}
        //Able to pass in the WxH
        style={{ width, height }}
        LoadingComponent={<Loader active>Loading map...</Loader>}
      />

      {/* .map() over the markers, creating them on the screen. */}
      {venues.map(venue => (
        <LocationMarker
          key={venue.location_id || venue.foursquare_id}
          venue={venue}
          setVisible={setInfoWindowVisible}
          setMarker={setSelectedMarker}
        />
      ))}

      <LocationInfoWindow
        marker={selectedMarker}
        isVisible={infoWindowVisible}
      />
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
