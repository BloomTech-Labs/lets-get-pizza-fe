import React from "react";
import { Header, Container, Image, Card } from "semantic-ui-react";
import "./favoriteShop.css";

const ShopCard = ({ location }) => {
  return (
    <Container>
      <div className="head-ch">
        <Image
          src={location.thumbnail_image}
          size="medium"
          circular
        />
        <h1 className="Header-ch">{location.business_name}</h1>
      </div>
      <div className="Desc-ch">
        <p className="address-ch">{location.address}</p>
        <p className="bio-ch">{location.store_bio}</p>
        <a href={`https://${location.website_url}`}>
          <p className="url-ch">{location.website_url}</p>
        </a>
      </div>
    </Container>
  );
};

export default ShopCard;
