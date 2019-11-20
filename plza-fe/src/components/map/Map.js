import React, { useState } from "react";
import API from "../../utils/API";
import {withRouter} from 'react-router-dom'
import {
  GoogleMapProvider,
  MapBox,
  Marker,
  InfoWindow
} from "@googlemap-react/core";

export default withRouter(function Map(props) {
  const { userLocation, width, height, venues } = props
  const [selectedMarker, setSelectedMarker] = useState({});

  const processVenue = async (e) => {
    let foursquare_id = e.target.getAttribute('fsid')
    let location_id = e.target.getAttribute('lid')
    console.log(foursquare_id, location_id)

    if(foursquare_id && !location_id){
      const createdLocation = await API.get(`/locations/live/${foursquare_id}`)
      location_id = createdLocation.data.id
    } 

    //redirect to location_id
    props.history.push(`/locations/${location_id}`);
  }
  
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
      {console.log(venues)}
      {venues.map(venue => (
        <Marker
          id={`marker-${venue.foursquare_id || venue.location_id}`}
          key={venue.foursquare_id}
          opts={{
            position: { lat: venue.latitude, lng: venue.longitude }
          }}
          onClick={() => {
            setSelectedMarker({
              id: `marker-${venue.foursquare_id || venue.location_id}`,
              ...venue
            });
          }}
        />
      ))}

      <InfoWindow anchorId={selectedMarker.id} visible>
        <h2>{selectedMarker.name}</h2>
        <p>{selectedMarker.address}</p>
        {/* Creates a "button" which processes */}
        <p onClick={processVenue} 
          fsid={selectedMarker.foursquare_id ? `${selectedMarker.foursquare_id}` : null} 
          lid={selectedMarker.location_id ? `${selectedMarker.location_id}` : null}>
            See The Deets ->
        </p>
      </InfoWindow>
    </GoogleMapProvider>
  );
})

Map.defaultProps = {
  width: "100%",
  height: "100vh",
  userLocation: {
    userLatitude: 0,
    userLongitude: 0
  }
};

