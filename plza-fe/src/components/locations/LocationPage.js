import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


import API from "../../utils/API";

// Location detail page
// Displays all information about a given location through the
// `id` param

export default function LocationPage() {
  const { id } = useParams();
  const [location, setLocation] = useState({});

  useEffect(() => {
    API.get(`/locations/${id}`)
      .then(response => setLocation(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="location">
      <h1>{location.business_name}</h1>
      <p>{location.address}</p>
      <p> <a href={location.website_url} target="_blank">Website</a> </p>
      <h4>About {location.business_name}</h4>
      <p>{location.official_description || "-"}</p>
      <h4>Our Store</h4>
      <p>{location.store_bio || "-"}</p>
      <h4>Special Diet Options</h4>
      <p>{location.dietary_offerenings || "-"}</p>

      <Link to="/locations/map">Back to Map</Link> | <Link to="/locations/search">Back to Search</Link> 

    </div>
  );
}
