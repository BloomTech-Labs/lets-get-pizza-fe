import React from "react";
import { Header, Image, Rating, Button, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { userSubmitSettings } from "../../../redux/actions/userActions";

const LocationHeader = ({ location }) => {
  // id is a string, favoriteShop is a number. Will need to convert data type on one to compare
  const { id } = useParams()
  const dispatch = useDispatch() 
  const favoriteShop = useSelector(({user}) => user.favorite_pizza_shop)
  return(
  <Header size="huge">
    <Image
      circular
      src={
        location.thumbnail_image ||
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
      {favoriteShop && 
        <Header.Subheader>
          <Icon 
            name='heart' 
            color={parseInt(id) === favoriteShop ? 'red' : 'grey'} 
            // Need to pass {target: {id: 'save}} as an argument in order to hit the API in the actions file
            onClick={() => dispatch(userSubmitSettings({target: {id: 'save'}}, {favorite_pizza_shop: id}))}
          />
          {parseInt(id) === favoriteShop ? 'Favorited' : 'Make Favorite'}
        </Header.Subheader>
      }
    </Header.Content>
  </Header>
  )
};

export default LocationHeader;
