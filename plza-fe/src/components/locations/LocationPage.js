import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Loader,
  Container,
  Header,
  Image,
  Grid,
  Segment
} from "semantic-ui-react";

import API from "../../utils/API";

import LocationPageSidebar from "./LocationPageSidebar";

// Location detail page
// Displays all information about a given location through the
// `id` param

export default function LocationPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});

  const { thumbnail_url, business_name, store_bio } = location;

  useEffect(() => {
    API.get(`/locations/${id}`)
      .then(response => {
        setLocation(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (isLoading) {
    return <Loader active>Loading...</Loader>;
  }

  return (
    <Container style={{ margin: "20px 0" }}>
      <Header size="huge">
        <Image
          circular
          src={
            thumbnail_url ||
            "https://react.semantic-ui.com/images/wireframe/square-image.png"
          }
        />

        <Header.Content>
          {business_name}
          {store_bio && <Header.Subheader>{store_bio}</Header.Subheader>}
        </Header.Content>
      </Header>

      <Grid stackable>
        <Grid.Column width={4}>
          <LocationPageSidebar location={location} />
        </Grid.Column>

        <Grid.Column width={10}>
          <Segment>
            <Header size="medium">Promotions</Header>
            <p>Coming soon...</p>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
