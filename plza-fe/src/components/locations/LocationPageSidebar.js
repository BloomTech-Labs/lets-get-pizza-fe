import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Icon, List, Button } from "semantic-ui-react";

const LocationPageSidebar = ({ location }) => (
  <Segment.Group>
    <Segment>
      <Header size="tiny">
        <Icon name="building" />
        <Header.Content>Address</Header.Content>
      </Header>
      <p>{location.address}</p>
    </Segment>
    <Segment>
      <Header size="tiny">
        <Icon name="edit" />
        <Header.Content>About us</Header.Content>
      </Header>
      <p>
        {location.official_description ||
          `${location.business_name} has not provided information about itself yet.`}
      </p>
    </Segment>

    <Segment>
      <Header size="tiny">
        <Icon name="food" />
        <Header.Content>Dietary offerings available</Header.Content>
      </Header>

      {location.dietary_offerings ? (
        <List>
          {location.dietary_offerings.map(offering => (
            <List.Item>
              <Icon name="check" />
              <List.Content>
                {offering[0].toUpperCase()}
                {offering.slice(1)}
              </List.Content>
            </List.Item>
          ))}
        </List>
      ) : (
        <p>
          This store has not provided information about its
          dietary/allergen-free offerings yet.
        </p>
      )}
    </Segment>

    <Segment>
      <Header size="tiny">
        <Icon name="chain" />
        <Header.Content>Links</Header.Content>
      </Header>
      <List>
        {location.website_url && (
          <List.Item
            as="a"
            href={location.website_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <List.Icon name="edit" />
            <List.Content>Official website</List.Content>
          </List.Item>
        )}
        <List.Item>
          <List.Icon name="edit outline" />
          <List.Content>Order takeout</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="car" />
          <List.Content>Order delivery</List.Content>
        </List.Item>
      </List>
    </Segment>

    {!location.email && (
      <Segment>
        <Header size="tiny">
          <Icon name="question" />
          <Header.Content>Is this your store?</Header.Content>
        </Header>
        <p>Call to action to sign up for Plza</p>

        <Button
          icon
          labelPosition="left"
          as={Link}
          to={`/locations/claim/${location.id}`}
        >
          <Icon name="lock" />
          Claim this location
        </Button>
      </Segment>
    )}
  </Segment.Group>
);

export default LocationPageSidebar;
