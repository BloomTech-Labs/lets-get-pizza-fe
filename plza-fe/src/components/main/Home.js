import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Container,
  Header,
  Segment,
  List,
  Button,
  Icon,
  Divider
} from "semantic-ui-react";

import API from "../../utils/API";
import Map from "../map/Map";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    API.get("/locations/map")
      .then(response => {
        setLocations(response.data.results);
        setUserLocation(response.data.userLocation);
      })
      .catch(error => console.log("Error:", error));
  }, []);

  return (
    <div className="homepage">
      <section className="map">
        <Map venues={locations} userLocation={userLocation} height={"350px"} />

        <footer className="geolocation">
          <p>{userLocation.friendlyTitle}</p>
          <Link to="/locations/map">Update Your Location</Link>
        </footer>
      </section>

      <Container>
        <Header size="huge" textAlign="center">
          Plza
          <Header.Subheader>Showin' you the sauce</Header.Subheader>
        </Header>

        <Grid stackable centered columns={2}>
          <Grid.Column>
            <Segment>
              <Header size="large">Are you a pizza fanatic?</Header>

              <List>
                <List.Item>
                  <Icon name="search" />
                  <List.Content>
                    <List.Header>Find pizza you love</List.Header>
                    <List.Description>
                      Suspendisse malesuada erat vitae neque consequat, non
                      lobortis eros tempor. Ut mollis tincidunt nulla. Nam
                      mollis tortor id augue sodales.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Icon name="star" />
                  <List.Content>
                    <List.Header>Leave ratings and reviews</List.Header>
                    <List.Description>
                      Quisque congue venenatis semper. Nulla mollis eros ut
                      consequat semper. Duis convallis metus non augue malesuada
                      finibus. Vestibulum nisl magna.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Icon name="calendar check" />
                  <List.Content>
                    <List.Header>Create and attend events</List.Header>
                    <List.Description>
                      Sed finibus ex a faucibus varius. Pellentesque
                      consectetur, justo eget efficitur hendrerit, odio nisl
                      vehicula tellus, non suscipit dolor lorem.
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>

              <Button
                fluid
                icon
                primary
                labelPosition="left"
                as={Link}
                to="/users/register"
              >
                <Icon name="user circle" />
                Find great pizza!
              </Button>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Header size="large">Do you own a restaurant?</Header>
              <List>
                <List.Item>
                  <Icon name="lock" />
                  <List.Content>
                    <List.Header>
                      Claim your location or create a new one
                    </List.Header>
                    <List.Description>
                      Suspendisse malesuada erat vitae neque consequat, non
                      lobortis eros tempor. Ut mollis tincidunt nulla. Nam
                      mollis tortor id augue sodales.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Icon name="percent" />
                  <List.Content>
                    <List.Header>
                      Engage locally with events and promotions
                    </List.Header>
                    <List.Description>
                      Quisque congue venenatis semper. Nulla mollis eros ut
                      consequat semper. Duis convallis metus non augue malesuada
                      finibus. Vestibulum nisl magna.
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Icon name="comments" />
                  <List.Content>
                    <List.Header>
                      Reply to customer's questions and comments
                    </List.Header>
                    <List.Description>
                      Sed finibus ex a faucibus varius. Pellentesque
                      consectetur, justo eget efficitur hendrerit, odio nisl
                      vehicula tellus, non suscipit dolor lorem.
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>

              <Button
                fluid
                icon
                secondary
                labelPosition="left"
                as={Link}
                to="/locations/register"
              >
                <Icon name="building" />
                Get started!
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
