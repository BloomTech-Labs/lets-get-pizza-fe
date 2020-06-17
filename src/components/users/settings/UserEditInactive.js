import React from 'react';
import { List, Icon, Grid } from 'semantic-ui-react';
import UserEditButton from './UserEditButton';

export default function UserEditInactive({ item }) {

    return (
        <Grid.Row style={{ borderBottom: '1px solid lightgrey' }}>
            <Grid.Column style={{ display: 'flex', alignItems: 'center' }}>
                <Icon name={item.icon} size='large' />
                <div id="inactive-list" style={{ marginLeft: "1rem" }}>
                    <List.Header >{item.title}</List.Header>
                    {/* Some Items may have an array. Array.isArray(parameter) will evaluate if a parameter is an array & return a boolean */}
                    {Array.isArray(item.value) ? (
                        item.value.map(listItem => <List.Description key={listItem}>{listItem}</List.Description>)
                    ) : (
                            <List.Description>{item.value}</List.Description>
                        )}
                </div>
            </Grid.Column>
            <UserEditButton text={'Edit'} item={item} />
        </Grid.Row>
    )
}