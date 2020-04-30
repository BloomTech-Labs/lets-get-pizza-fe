import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import DashMenu from "./dashboard-utils/DashMenu";
import UserSectionsController from "./sections/UserSectionsController";
import FriendsController from "./FriendsComp/FriendsController";
import FriendsListController from "./FriendsComp/FriendsController";

export default function Dashboard() {
  const [active, setActive] = useState("Home");

  const selectComponent = (e, data) => {
    console.log(data.name);
    setActive(data.name);
  };

  return (
    // profile div with 2 child components to render side-by-side
    // left-menu-bar div to have tabs/actions to conditionally render list components to the right
    // list component container
    <Grid container columns={2} width={16} stackable>
      <Grid.Row>
        <Grid.Column
          floated="left"
          width={5}
          style={{ paddingTop: "2vh", height: "45vh" }}
        >
          <DashMenu selectComponent={selectComponent} active={active} />
        </Grid.Column>
        <Grid.Column width={11} align={"left"} style={{ paddingTop: "2vh" }}>
          <UserSectionsController />
          <FriendsListController />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
