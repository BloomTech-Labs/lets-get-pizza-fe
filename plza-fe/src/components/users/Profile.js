import React, { useState } from "react";
import { curr_user, curr_location } from '../../utils/auth'
import { Grid, Menu, Header } from "semantic-ui-react";
import Login from './Login';
import Register from './Register'

//THIS NEEDS TO SPLIT INTO TWO DIFFERENT COMPONENTS
export default function Profile() {
  const [component, setComponent] = useState('Home');

  const selectComponet = (e, data) => {
    setComponent(data.content);
  }
  console.log(component)
  return (
    // profile div with 2 child components to render side-by-side
    // left-menu-bar div to have tabs/actions to conditionally render list components to the right
    // list component container
    <Grid container columns={2} width={16} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={5} style={{ paddingTop: '2vh', height: '45vh' }}>
          <Menu items={[
            { key: '1', name: 'Home', content: 'Home' },
            { key: '2', name: 'My Friends', content: 'My Friends' },
            { key: '3', name: 'Events', content: 'Events' },
            { key: '4', name: 'Promotions', content: 'Promotions' },
            { key: '5', name: 'Fav Pizza Shop', content: 'Fav Pizza Shop' },
            { key: '6', name: 'Personal Reviews', content: 'Personal Reviews' },
            { key: '7', name: 'Profile', content: 'Profile' }
          ]} size='large' fluid='true' pointing tabular vertical onItemClick={selectComponet} defaultActiveIndex={0} />
        </Grid.Column>
        <Grid.Column width={11} align={'center'} style={{ paddingTop: '2vh' }}>
          <Header as='h2' textAlign='center'>
            <Header.Content>{component}</Header.Content>
          </Header>
          List Component
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
