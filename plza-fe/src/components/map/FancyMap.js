import React, { useState, useEffect } from "react";
import { Icon, Loader, Form } from "semantic-ui-react";
import ReactMapGL, {
  LinearInterpolator,
  FlyToInterpolator,
  Source,
  Layer,
  Marker,
  Popup
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import API from "../../utils/API";
import LocationCard from "../locations/search/LocationCard";

export default function FancyMap(props) {
  const [isLoading, setIsLoading] = useState(true);

  // Location state
  const [locations, setLocations] = useState([]);

  const LocationsGeoJSON = {
    type: "FeatureCollection",
    features: locations.map(location => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [location.longitude, location.latitude]
      },
      properties: {
        title: location.name,
        icon: "circle"
      }
    }))
  };

  const fetchLocations = searchQuery =>
    API.get("/locations/map", { params: { search: searchQuery } })
      .then(response => {
        setLocations(response.data.results);
        setUserLocation(response.data.userLocation);
        setIsLoading(false);
      })
      .catch(error => console.log("Error:", error));

  // User location state
  const [userLocation, setUserLocation] = useState({});

  // Whenever user location changes, update viewport
  // to those coordinates and use a fly to transition
  // so it looks pretty
  useEffect(() => {
    setViewport(viewport => ({
      ...viewport,
      latitude: userLocation.userLatitude,
      longitude: userLocation.userLongitude,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator()
    }));
  }, [userLocation]);

  // Initial viewport state
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    pitch: 0,
    zoom: 12,
    minZoom: 12,
    maxZoom: 16,
    transitionDuration: 500,
    transitionInterpolator: new LinearInterpolator()
  });

  const onViewportChange = viewport => setViewport({ ...viewport });

  // Marker popup state
  const [selectedMarker, setSelectedMarker] = useState({});
  const [isPopupVisible, setPopupVisiblility] = useState(false);

  // Geocoder state
  const [searchQuery, setSearchQuery] = useState("");
  const updateSearchQuery = event => setSearchQuery(event.target.value);
  const searchLocations = event => fetchLocations(searchQuery);

  // On first render, fetch locations without a search query.
  // This will default to the location retrieved by the backend.
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
      // mapStyle="mapbox://styles/grenuttag/ck4do0nf04awl1co2h6kb7b6y"
      width={props.width}
      height={props.height}
    >
      <Source type="geojson" data={LocationsGeoJSON}>
        <Layer
          id="points"
          type="symbol"
          layout={{
            "icon-image": ["concat", ["get", "icon"], "-15"],
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 13,
            "text-transform": "uppercase",
            "text-letter-spacing": 0.05,
            "text-anchor": "top",
            "text-offset": [0, 0.95]
          }}
          paint={{
            "text-color": "#202",
            "text-halo-color": "#fff",
            "text-halo-width": 2
          }}
        />
      </Source>

      {isPopupVisible && (
        <Popup
          tipSize={10}
          anchor="top"
          offsetTop={45}
          offsetLeft={15}
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
