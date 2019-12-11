import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Header,
  Image,
  Grid,
  Segment,
  Card
} from "semantic-ui-react";

import API from "../../utils/API";

import "./LocationPage.css";

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
    <Container style={{ margin: "20px 0" }}>
      <Header size="large">
        {location.thumbnail_url && (
          <Image circular src={location.thumbnail_url} />
        )}
        {location.business_name}
      </Header>
      <Grid columns="2">
        <Grid.Row>
          <h1>Location Information</h1>
          <Segment.Group>
            <Segment>
              <h4>About {location.business_name}</h4>
              <p>{location.official_description || "-"}</p>
            </Segment>
            <Segment>
              <h4>Our Store</h4>
              <p>{location.store_bio || "-"}</p>
            </Segment>
            <Segment>
              <h4>Special Diet Options</h4>
              <p>{location.dietary_offerings || "-"}</p>
            </Segment>
          </Segment.Group>
        </Grid.Row>
        <Grid.Row>
          <h1>Events, Reviews, and More</h1>
        </Grid.Row>
      </Grid>
      <p>
        <a
          href={location.website_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
      </p>
      <Link to="/locations/map">Back to Map</Link> |{" "}
      <Link to="/locations/search">Back to Search</Link> <br />
      {!location.email && (
        <Link to={`/locations/claim/${location.id}`}>Claim this Location</Link>
      )}
    </Container>
  );
}
