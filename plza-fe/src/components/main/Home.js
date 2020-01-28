import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Container,
  Header,
  Segment,
  List,
  Button,
  Icon
} from "semantic-ui-react";

import Map from "../map/Map";

const Home = () => (
  <div className="homepage">
    <Map height="400px" />

    <Container style={{ marginTop: "20px" }}>
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
                    From the big boy chains to the legendary local dives, see all the pizza possibilities near you!
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <Icon name="star" />
                <List.Content>
                  <List.Header>Leave ratings and reviews</List.Header>
                  <List.Description>
                    Become a bold trailblazer of pizza and have your reviews and ratings stand as a beacon for all!
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <Icon name="calendar check" />
                <List.Content>
                  <List.Header>Create and attend events</List.Header>
                  <List.Description>
                    Everyone knows that pizza hits the spot better with friends. Create events for you and your friends to jump into or search for any events your friends or local pizza places already have happening!
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
                    Local business looking to get on the map? We got you. A francise owner that needs to claim your store? We got you!
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
                    Everyone loves a party! Good for customers and good for business! Create and manage events happening at your location! Be sure that the locals in the area know what you have going on!
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
                    Reach your customers and answer questions they have! Let your very own FAQ section form on Plza!
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

export default Home;
