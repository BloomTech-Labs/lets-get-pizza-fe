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
    <Map height={"400px"} />

    <Container style={{ marginTop: "20px" }}>
      <Header size="huge" textAlign="center">
        Plza
        <Header.Subheader>Showin' you the sauce</Header.Subheader>
      </Header>

      <Segment.Group raised horizontal>
        <Segment>
          <Header size="large">Are you a pizza fanatic?</Header>

          <List>
            <List.Item>
              <Icon name="search" />
              <List.Content>
                <List.Header>Find pizza you love</List.Header>
                <List.Description>
                  Suspendisse malesuada erat vitae neque consequat, non lobortis
                  eros tempor. Ut mollis tincidunt nulla. Nam mollis tortor id
                  augue sodales.
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
                  Sed finibus ex a faucibus varius. Pellentesque consectetur,
                  justo eget efficitur hendrerit, odio nisl vehicula tellus, non
                  suscipit dolor lorem.
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
                  Suspendisse malesuada erat vitae neque consequat, non lobortis
                  eros tempor. Ut mollis tincidunt nulla. Nam mollis tortor id
                  augue sodales.
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
                  Sed finibus ex a faucibus varius. Pellentesque consectetur,
                  justo eget efficitur hendrerit, odio nisl vehicula tellus, non
                  suscipit dolor lorem.
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
      </Segment.Group>
    </Container>
  </div>
);

export default Home;
