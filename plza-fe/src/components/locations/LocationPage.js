import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Container, Header } from "semantic-ui-react";

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
      <Container>
          <Header as="h1">{location.business_name}</Header>
          <Card.Description>{location.address}</Card.Description>
          <p>
            {" "}
            <a
              href={location.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>{" "}
          </p>
          <Card.Description as="h4">About {location.business_name}</Card.Description>
          <p>{location.official_description || "-"}</p>
          <Card.Description as="h4">Our Store</Card.Description>
          <p>{location.store_bio || "-"}</p>
          <Card.Description as="h4">Special Diet Options</Card.Description>
          <p>{location.dietary_offerings || "-"}</p>
      <Link to="/locations/map">Back to Map</Link> |{" "}
      <Link to="/locations/search">Back to Search</Link> <br />
      {!location.email && location.foursquare_id ? (
        <Link to={`/locations/claim/${location.id}`}>Claim this Location</Link>
      ) : (
        ""
      )}
    </Container>
    </div>
  );
}
