import React from "react";
import { curr_user, curr_location } from "../../utils/auth";
import { Grid, Menu } from "semantic-ui-react";
import "./components/users/MobileStyle.css";

//THIS NEEDS TO SPLIT INTO TWO DIFFERENT COMPONENTS
export default function Profile() {
  return (
    // profile div with 2 child components to render side-by-side
    // left-menu-bar div to have tabs/actions to conditionally render list components to the right
    // list component container
    <Grid container columns={2} relaxed stackable>
      <Grid.Row>
        <Grid.Column width={5} style={{ paddingTop: "2vh", height: "45vh" }}>
          <Menu
            items={[
              { key: "1", name: "Home", content: "Home" },
              { key: "2", name: "My Friends", content: "My Friends" },
              { key: "3", name: "Events", content: "Events" },
              { key: "4", name: "Promotions", content: "Promotions" },
              { key: "5", name: "Fav Pizza Shop", content: "Fav Pizza Shop" },
              {
                key: "6",
                name: "Personal Reviews",
                content: "Personal Reviews",
              },
              { key: "7", name: "Profile", content: "Profile" },
            ]}
            size="large"
            fluid="true"
            pointing
            tabular
            vertical
          />
        </Grid.Column>
        <Grid.Column width={11} style={{ paddingTop: "2vh" }}></Grid.Column>
      </Grid.Row>
    </Grid>
  );

  // <div>
  //   {
  //     curr_user ?
  //       <div className="profile">
  //         <h1>Welcome, {curr_user.display_name}</h1>
  //         <p>{curr_user.email}, {curr_user.username}</p>
  //         <p>{curr_user.display_location}</p>
  //         <p>{curr_user.dietary_preference}, {curr_user.favorite_pizza_toppings}</p>
  //       </div> : ""
  //   }
  //   {
  //     curr_location ?
  //       <div className="profile">
  //         <h1>Welcome, {curr_location.username}</h1>
  //         <h3>{curr_location.business_name}</h3>
  //         <p>{curr_location.address}</p>
  //         <p>Lat/Lng: {curr_location.latitude}, {curr_location.longitude}</p>
  //       </div> : ""
  //   }

  // </div>
}
