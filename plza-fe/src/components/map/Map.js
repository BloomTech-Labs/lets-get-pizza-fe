import React, { useState, useEffect } from "react";
import { Loader, Form, Input } from "semantic-ui-react";
import ReactMapGL, {
  FlyToInterpolator,
  Source,
  Layer,
  Popup
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import API from "../../utils/API";
import LocationCard from "../locations/search/LocationCard";

export default function Map(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchingLocations, setFetchingLocations] = useState(true);

  // Location state
  const [locations, setLocations] = useState([]);

  const LocationsGeoJSON = {
    type: "FeatureCollection",
    features: locations.map((location, index) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [location.longitude, location.latitude]
      },
      properties: {
        id: index,
        title: location.name,
        icon: "restaurant-pizza"
      }
    }))
  };

  const fetchLocations = searchQuery => {
    setFetchingLocations(true);
    API.get("/locations/map", { params: { search: searchQuery } })
      .then(response => {
        setLocations(response.data.results);
        setUserLocation(response.data.userLocation);

        setIsLoading(false);
        setSearchQuery("");
      })
      .catch(error => console.log("Error:", error));
  };

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
    setFetchingLocations(false);
  }, [userLocation]);

  // Initial viewport state
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    pitch: 0,
    zoom: 12,
    minZoom: 10,
    maxZoom: 18,
    maxPitch: 0
  });

  // Whenever the user updates the viewport, commit those changes
  // to state
  const onViewportChange = viewport => setViewport({ ...viewport });

  // When a user clicks on the map, see if it was a location and
  // if it is, set the selected marker, start displaying the
  // location popup, and then transition the viewport to the selected marker
  const onClick = event => {
    const feature = event.features[0];

    if (feature && feature.source === "locations") {
      const marker = locations[feature.properties.id];

      setSelectedMarker(marker);
      setPopupVisiblility(true);

      setViewport(viewport => ({
        ...viewport,
        latitude: marker.latitude,
        longitude: marker.longitude,
        zoom: viewport.zoom > 15 ? viewport.zoom : 15,
        transitionDuration: 800,
        transitionInterpolator: new FlyToInterpolator()
      }));
    }
  };

  // Location popup state
  const [selectedMarker, setSelectedMarker] = useState({});
  const [isPopupVisible, setPopupVisiblility] = useState(false);

  const LocationPopup = React.memo(
    ({ selectedMarker, setPopupVisiblility }) => (
      <Popup
        tipSize={10}
        anchor="bottom"
        offsetTop={-15}
        dynamicPosition={false}
        closeOnClick={false}
        latitude={selectedMarker.latitude}
        longitude={selectedMarker.longitude}
        onClose={() => setPopupVisiblility(false)}
      >
        <LocationCard venue={selectedMarker} />
      </Popup>
    )
  );

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
    return (
      <div style={{ width: props.width, height: props.height }}>
        <Loader style={{ position: "relative" }} active>
          Loading...
        </Loader>
      </div>
    );
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={onViewportChange}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/grenuttag/ck4do0nf04awl1co2h6kb7b6y?optimize=true"
      width={props.width}
      height={props.height}
      onClick={onClick}
    >
      <Source id="locations" type="geojson" data={LocationsGeoJSON}>
        <Layer
          id="location_points"
          type="symbol"
          layout={{
            "icon-image": ["concat", ["get", "icon"], "-15"],
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 12,
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
        <LocationPopup
          selectedMarker={selectedMarker}
          setPopupVisiblility={setPopupVisiblility}
        />
      )}

      <Form onSubmit={searchLocations}>
        <Input
          icon={{ name: "search", circular: true }}
          loading={fetchingLocations ? true : false}
          value={searchQuery}
          placeholder={userLocation.friendlyTitle}
          onChange={updateSearchQuery}
          style={{ margin: "10px" }}
        />
      </Form>
    </ReactMapGL>
  );
}

Map.defaultProps = {
  width: "100vw",
  height: "100vh"
};
