import React from "react";
import { Link } from "react-router-dom";
import { SegmentGroup, Icon, List, Button } from "semantic-ui-react";

import SidebarSegment from "./SidebarSegment";

const Sidebar = ({ location, canEdit, currLocation }) => (
  <SegmentGroup>
    <SidebarSegment icon="building" title="Address">
      <p>{location.address}</p>
    </SidebarSegment>

    <SidebarSegment icon="edit" title="About us">
      <p>
        {location.official_description ||
          `${location.business_name} has not provided information about itself yet.`}
      </p>
    </SidebarSegment>

    <SidebarSegment icon="book" title="Store Bio">
      {location.store_bio ||
        `${location.business_name} has not provided a bio about itself yet.`}
    </SidebarSegment>

    <SidebarSegment icon="food" title="Dietary offerings">
      {location.dietary_offerings ? (
        <List>
          {location.dietary_offerings.map((offering) => (
            <List.Item key={offering}>
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
          This store has not provided information about its special dietary
          offerings yet.
        </p>
      )}
    </SidebarSegment>

    <SidebarSegment icon="chain" title="Links">
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
    </SidebarSegment>

    {!location.email && !currLocation && (
      <SidebarSegment icon="question" title="Is this your store?">
        <p>Sign up now and start working with Plza!</p>

        <Button
          icon
          labelPosition="left"
          as={Link}
          to={`/locations/claim/${location.id}`}
        >
          <Icon name="lock" />
          Claim this page
        </Button>
      </SidebarSegment>
    )}

    {canEdit && (
      <SidebarSegment icon="star" title="Administrate this page">
        <Button as={Link} to={`/locations/edit/${location.id}`}>
          Edit page
        </Button>
      </SidebarSegment>
    )}
  </SegmentGroup>
);

export default Sidebar;
