import React from "react";
import { Header, Image } from "semantic-ui-react";

const LocationHeader = ({ location }) => (
  <Header size="huge">
    <Image
      circular
      src={
        location.thumbnail_url ||
        "https://react.semantic-ui.com/images/wireframe/square-image.png"
      }
    />

    <Header.Content>
      {location.business_name}
      {location.store_bio && (
        <Header.Subheader>{location.store_bio}</Header.Subheader>
      )}
    </Header.Content>
  </Header>
);

export default LocationHeader;
