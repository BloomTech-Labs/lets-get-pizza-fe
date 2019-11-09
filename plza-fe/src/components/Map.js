import React, { useState } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";

export default function Map(props) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 1024,
    zoom: 4
  });

  const geolocateStyle = { position: "absolute", top: 0, left: 0, margin: 10 };
  const navigationStyle = { position: "absolute", right: 0, margin: 10 };

  const onViewportChange = viewport => setViewport({ ...viewport });

  return (
    <ReactMapGL {...viewport} onViewportChange={onViewportChange}>
      <GeolocateControl style={geolocateStyle} />
      <div style={navigationStyle}>
        <NavigationControl />
      </div>

      {props.children}
    </ReactMapGL>
  );
}
