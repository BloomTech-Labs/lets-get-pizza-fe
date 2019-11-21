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
  //Use to navigate to the venues
  const history = useHistory();
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
          ]
        }}
        //Able to pass in the WxH
        style={{ width, height }}
      />
      
      {/* .map() over the markers, creating them on the screen. */}
      {venues.map(venue => (
        <Marker 
          id={`marker-${venue.location_id || venue.foursquare_id}`}
          key={venue.location_id || venue.foursquare_id}
          opts={{
            position: { lat: venue.latitude, lng: venue.longitude }
          }}
          onClick={() => {
            // Start displaying the InfoWindow and set this as
            // the selected marker
            setInfoWindowVisible(true);
            setSelectedMarker({
              id: `marker-${venue.location_id || venue.foursquare_id}`,
              ...venue
            });
          }}
        />
      ))}

      <InfoWindow anchorId={selectedMarker.id} visible={infoWindowVisible}>
        <h2>{selectedMarker.name}</h2>
        <p>{selectedMarker.address}</p>
        {/* Creates a "button" which processes whether or not there is a foursquare/*/}
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
