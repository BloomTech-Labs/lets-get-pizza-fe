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
                Suspendisse malesuada erat vitae neque consequat, non lobortis
                eros tempor. Ut mollis tincidunt nulla. Nam mollis tortor id
                augue sodales.
              </FeatureItem>

              <FeatureItem icon="star" headline="Leave ratings and reviews">
                Quisque congue venenatis semper. Nulla mollis eros ut consequat
                semper. Duis convallis metus non augue malesuada finibus.
                Vestibulum nisl magna.
              </FeatureItem>

              <FeatureItem
                icon="calendar check"
                headline="Create and attend events"
              >
                Sed finibus ex a faucibus varius. Pellentesque consectetur,
                justo eget efficitur hendrerit, odio nisl vehicula tellus, non
                suscipit dolor lorem.
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
                Suspendisse malesuada erat vitae neque consequat, non lobortis
                eros tempor. Ut mollis tincidunt nulla. Nam mollis tortor id
                augue sodales.
              </FeatureItem>

              <FeatureItem
                icon="percent"
                headline="Engage locally with events and promotions"
              >
                Quisque congue venenatis semper. Nulla mollis eros ut consequat
                semper. Duis convallis metus non augue malesuada finibus.
                Vestibulum nisl magna.
              </FeatureItem>

              <FeatureItem
                icon="comments"
                headline="Reply to customer's questions and comments"
              >
                Sed finibus ex a faucibus varius. Pellentesque consectetur,
                justo eget efficitur hendrerit, odio nisl vehicula tellus, non
                suscipit dolor lorem.
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
