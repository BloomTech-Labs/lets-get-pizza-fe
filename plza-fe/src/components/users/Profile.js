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
  console.log(icons)
  return (
    // profile div with 2 child components to render side-by-side
    // left-menu-bar div to have tabs/actions to conditionally render list components to the right
    // list component container
    <Grid container columns={2} width={16} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={5} style={{ paddingTop: '2vh', height: '45vh' }} >
          <Menu size='large' fluid='true' pointing tabular vertical >
            <Menu.Item name='Home'
              active={active === 'Home'}
              onClick={selectComponet}
              style={flex}>
              <img src={icons.homeIcon} />
              <p>Home</p>
            </Menu.Item>

            <Menu.Item name='My Friends'
              active={active === 'My Friends'}
              onClick={selectComponet}
              style={flex}>
              <img src={icons.networkIcon} />
              <p>My Friends</p>
            </Menu.Item>


            <Menu.Item name='Events'
              active={active === 'Events'}
              onClick={selectComponet}
              style={flex}>
              <img src={icons.eventsIcon} />
              <p>Events</p>
            </Menu.Item>


            <Menu.Item name='Promotions'
              active={active === 'Promotions'}
              onClick={selectComponet}
              style={flex}>
              <img src={icons.promotionsIcon} />
              <p>Promotions</p>
            </Menu.Item>


            <Menu.Item name='Fav Pizza Shop'
              active={active === 'Fav Pizza Shop'}
              onClick={selectComponet}
              style={flex}>
              <img src={icons.pizzaIcon} />
              <p>Fav Pizza Shop</p>
            </Menu.Item>

            <Menu.Item name='Personal Reviews'
              active={active === 'Personal Reviews'}
              onClick={selectComponet}
              style={flex}>
              <img src={icons.contactIcon} />
              <p>Personal Reviews</p>
            </Menu.Item>

            <Menu.Item name='Profile'
              active={active === 'Profile'}
              onClick={selectComponet}
              style={flex}>
              <img src={icons.profileIcon} />
              <p>Profile</p>
            </Menu.Item>


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
