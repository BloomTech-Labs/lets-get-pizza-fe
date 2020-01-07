import React, { useState, useEffect } from "react";
import { Icon, Loader, Form } from "semantic-ui-react";
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import API from "../../utils/API";
import LocationCard from "../locations/search/LocationCard";

export default function FancyMap(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState({});

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: props.width,
    height: props.height,
    zoom: 13
  });

  const [selectedMarker, setSelectedMarker] = useState({});
  const [isPopupVisible, setPopupVisiblility] = useState(false);

  const fetchLocations = searchQuery =>
    API.get("/locations/map", { params: { search: searchQuery } })
      .then(response => {
        setLocations(response.data.results);
        setUserLocation(response.data.userLocation);
        setIsLoading(false);
      })
      .catch(error => console.log("Error:", error));

  const [searchQuery, setSearchQuery] = useState("");

  const updateSearchQuery = event => setSearchQuery(event.target.value);
  const searchLocations = event => fetchLocations(searchQuery);

  // Whenever user location changes, update viewport
  // to those coordinates
  useEffect(() => {
    setViewport(viewport => ({
      ...viewport,
      latitude: userLocation.userLatitude,
      longitude: userLocation.userLongitude,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator()
    }));
  }, [userLocation]);

  const onViewportChange = viewport => setViewport({ ...viewport });

  useEffect(() => {
    fetchLocations();
  }, []);

  if (isLoading) {
    return <Loader active>Loading map...</Loader>;
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={onViewportChange}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/grenuttag/ck4do0nf04awl1co2h6kb7b6y"
    >
      {locations.map(location => (
        <Marker
          key={location.location_id || location.foursquare_id}
          latitude={location.latitude}
          longitude={location.longitude}
        >
          <Icon
            color={location.location_id ? "red" : "orange"}
            size="big"
            name="map marker"
            onClick={() => {
              setPopupVisiblility(true);
              setSelectedMarker({ ...location });
            }}
          />
        </Marker>
      ))}

      {isPopupVisible && (
        <Popup
          tipSize={5}
          anchor="top"
          offsetTop={45}
          offsetLeft={15}
          dynamicPosition={false}
          latitude={selectedMarker.latitude}
          longitude={selectedMarker.longitude}
          onClose={() => setPopupVisiblility(false)}
        >
          <LocationCard venue={selectedMarker} />
        </Popup>
      )}

      <Form
        onSubmit={searchLocations}
        style={{
          width: "250px",
          margin: "10px"
        }}
      >
        <Form.Input
          action={{ icon: "search" }}
          value={searchQuery}
          placeholder={userLocation.friendlyTitle}
          onChange={updateSearchQuery}
        />
      </Form>
    </ReactMapGL>
  );
}

FancyMap.defaultProps = {
  width: "100vw",
  height: "100vh"
};
