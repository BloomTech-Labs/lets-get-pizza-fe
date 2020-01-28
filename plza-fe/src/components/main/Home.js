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

const FeatureItem = ({ icon, headline, children }) => (
  <List.Item>
    <Icon name={icon} />
    <List.Content>
      <List.Header>{headline}</List.Header>
      <List.Description>{children}</List.Description>
    </List.Content>
  </List.Item>
);

const Home = () => (
  <div className="homepage">
    <Map height="500px" />

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
              <FeatureItem icon="search" headline="Find pizza you love">
                From the big boy chains to the legendary local dives, see all
                the pizza possibilities near you!
              </FeatureItem>

              <FeatureItem icon="star" headline="Leave ratings and reviews">
                Become a bold trailblazer of pizza and have your reviews and
                ratings stand as a beacon for all!
              </FeatureItem>

              <FeatureItem
                icon="calendar check"
                headline="Create and attend events"
              >
                Everyone knows that pizza hits the spot better with friends.
                Create events for you and your friends to jump into or search
                for any events your friends or local pizza places already have
                happening!
              </FeatureItem>
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
              <FeatureItem
                icon="lock"
                headline="Claim your location or create a new one"
              >
                Local business looking to get on the map? We got you. A francise
                owner that needs to claim your store? We got you!
              </FeatureItem>

              <FeatureItem
                icon="percent"
                headline="Engage locally with events and promotions"
              >
                Everyone loves a party! Good for customers and good for
                business! Create and manage events happening at your location!
                Be sure that the locals in the area know what you have going on!
              </FeatureItem>

              <FeatureItem
                icon="comments"
                headline="Reply to customer's questions and comments"
              >
                Reach your customers and answer questions they have! Let your
                very own FAQ section form on Plza!
              </FeatureItem>
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
