import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Loader,
  Container,
  Header,
  Icon,
  Image,
  Grid,
  Segment,
  Button,
  List
} from "semantic-ui-react";

import API from "../../utils/API";

// Location detail page
// Displays all information about a given location through the
// `id` param

export default function LocationPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});

  const {
    thumbnail_url,
    business_name,
    address,
    official_description,
    store_bio,
    dietary_offerings,
    website_url,
    email
  } = location;

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
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        />
        <Header.Content>
          {business_name}
          {store_bio && <Header.Subheader>{store_bio}</Header.Subheader>}
        </Header.Content>
      </Header>
      <Grid stackable>
        <Grid.Column width={4}>
          <Segment.Group>
            <Segment>
              <Header size="tiny">
                <Icon name="building" />
                <Header.Content>Address</Header.Content>
              </Header>
              <p>{address}</p>
            </Segment>
            <Segment>
              <Header size="tiny">
                <Icon name="edit" />
                <Header.Content>About us</Header.Content>
              </Header>
              <p>
                {official_description ||
                  "This store has not provided information about itself yet."}
              </p>
            </Segment>

            <Segment>
              <Header size="tiny">
                <Icon name="food" />
                <Header.Content>Dietary offerings available</Header.Content>
              </Header>

              {dietary_offerings ? (
                <List>
                  {dietary_offerings.map(offering => (
                    <List.Item>
                      <Icon name="check" />
                      <List.Content>
                        {offering[0].toUpperCase()}
                        {`${offering.slice(1)}`}
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              ) : (
                "This store has not provided information about its dietary/allergen-free offerings yet."
              )}
            </Segment>

            <Segment>
              <Header size="tiny">
                <Icon name="chain" />
                <Header.Content>Links</Header.Content>
              </Header>
              <List>
                <List.Item
                  as="a"
                  href={website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <List.Icon name="edit" />
                  <List.Content>Official website</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="edit" />
                  <List.Content>Order takeout</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="car" />
                  <List.Content>Order delivery</List.Content>
                </List.Item>
              </List>
            </Segment>
          </Segment.Group>

          {!email && (
            <Button
              icon
              labelPosition="left"
              as={Link}
              to={`/locations/claim/${location.id}`}
            >
              <Icon name="lock" />
              Claim this location
            </Button>
          )}
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
