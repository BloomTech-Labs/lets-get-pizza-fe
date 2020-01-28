import React from "react";
import { Header, Image, Rating } from "semantic-ui-react";

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

      <Rating
        disabled
        rating={location.average_rating}
        maxRating={5}
        style={{ position: "relative", top: "-5px", marginLeft: "10px" }}
      />

      {location.store_bio && (
        <Header.Subheader>{location.store_bio}</Header.Subheader>
      )}
    </Header.Content>
  </Header>
);

export default LocationHeader;
