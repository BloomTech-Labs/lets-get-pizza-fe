import React, { useState } from "react";
import { Grid, Menu, Header } from "semantic-ui-react";
import icons from './profile-utils/icons';

//THIS NEEDS TO SPLIT INTO TWO DIFFERENT COMPONENTS
export default function Profile() {
  const [active, setActive] = useState('Home');
  const flex = { display: "flex", alignItems: 'center' };

  const selectComponet = (e, data) => {
    console.log(data.name)
    setActive(data.name);
  }

  const menuItems = [
    { name: 'Home', icon: icons.homeIcon },
    { name: 'My Friends', icon: icons.networkIcon },
    { name: 'Events', icon: icons.eventsIcon },
    { name: 'Promotions', icon: icons.promotionsIcon },
    { name: 'Fav Pizza Shop', icon: icons.pizzaIcon },
    { name: 'Personal Reviews', icon: icons.contactIcon },
    { name: 'Profile', icon: icons.profileIcon },
  ]

  return (
    // profile div with 2 child components to render side-by-side
    // left-menu-bar div to have tabs/actions to conditionally render list components to the right
    // list component container
    <Grid container columns={2} width={16} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={5} style={{ paddingTop: '2vh', height: '45vh' }} >
          <Menu size='large' fluid='true' pointing tabular vertical >
            {
              menuItems.map(item => {
                return (
                  <Menu.Item name={item.name}
                    active={active === item.name}
                    onClick={selectComponet}
                    style={flex}>
                    <img src={item.icon} />
                    <p>{item.name}</p>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Grid.Column>
        <Grid.Column width={11} align={'left'} style={{ paddingTop: '2vh' }}>
          <Header as='h2' textAlign='center'>
            <Header.Content>{active}</Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
