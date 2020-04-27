import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import DashMenu from './dashboard-utils/DashMenu';
import UserSectionsController from './UserSectionsController';
import { useHistory } from 'react-router-dom'

export default function Dashboard() {
  const [active, setActive] = useState(useHistory().location.pathname.slice(12) || "profile");

  const selectComponent = (e, data) => {
    setActive(data.key);
  }

  return (
    // profile div with 2 child components to render side-by-side
    // left-menu-bar div to have tabs/actions to conditionally render list components to the right
    // list component container
    <Grid container columns={2} width={16} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={5} style={{ paddingTop: '2vh', height: '30rem' }} >
          <DashMenu selectComponent={selectComponent} active={active} />
        </Grid.Column>
        <Grid.Column width={11} align={'left'} style={{ paddingTop: '2vh' }}>
          <UserSectionsController />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
