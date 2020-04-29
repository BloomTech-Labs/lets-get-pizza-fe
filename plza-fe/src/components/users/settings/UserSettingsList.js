import React from 'react';
import { List, Button, Icon, Input, Item, Grid } from 'semantic-ui-react';
import UserEditButton from './UserEditButton';


export default function UserSettingsList(props) {



    return (
        <Grid columns={2} >


            {props.current === props.item.name ? (
                <Grid.Row style={{ borderBottom: '1px solid lightgrey' }}>
                    <Grid.Column style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon name={props.item.icon} size='large' />
                        <Input onChange={props.handleChange} name={props.item.name} value={props.item.value} />
                    </Grid.Column>
                    <UserEditButton text={'Save'} item={props.item} handleClick={props.handleSubmit} />
                </Grid.Row>
            ) : (
                    <Grid.Row style={{ borderBottom: '1px solid lightgrey' }}>
                        <Grid.Column style={{ display: 'flex', alignItems: 'center' }}>
                            <Icon name={props.item.icon} size='large' />
                            <div style={{ marginLeft: "1rem" }}>
                                <List.Header >{props.item.title}</List.Header>
                                <List.Description>{props.item.value}</List.Description>
                            </div>
                        </Grid.Column>
                        <UserEditButton text={'Edit'} item={props.item} handleClick={props.handleClick} />
                    </Grid.Row>
                )}
        </Grid>
    )
}