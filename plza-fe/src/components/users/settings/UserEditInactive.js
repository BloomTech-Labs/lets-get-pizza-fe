import React from 'react';
import { List, Icon, Grid } from 'semantic-ui-react';
import UserEditButton from './UserEditButton';

export default function UserEditInactive(props) {

    return (
        <Grid.Row style={{ borderBottom: '1px solid lightgrey' }}>
            <Grid.Column style={{ display: 'flex', alignItems: 'center' }}>
                <Icon name={props.item.icon} size='large' />
                <div style={{ marginLeft: "1rem" }}>
                    <List.Header >{props.item.title}</List.Header>
                    {/* Some Items may have an array. Array.isArray(parameter) will evaluate if a parameter is an array & return a boolean */}
                    {Array.isArray(props.item.value) ? (
                        props.item.value.map(listItem => <List.Description>{listItem}</List.Description>)
                    ) : (
                            <List.Description>{props.item.value}</List.Description>
                        )}
                </div>
            </Grid.Column>
            <UserEditButton text={'Edit'} item={props.item} handleClick={props.handleClick} />
        </Grid.Row>
    )
}