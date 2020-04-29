import React from 'react';
import { List, Dropdown, Icon, Input, Item, Grid } from 'semantic-ui-react';
import UserEditButton from './UserEditButton';


export default function UserSettingsList(props) {



    return (
        <Grid columns={2} >


            {props.current === props.item.name ? (
                <Grid.Row style={{ borderBottom: '1px solid lightgrey' }}>
                    <Grid.Column style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon name={props.item.icon} size='large' />
                        {props.current === 'dietary_preference' ? (
                            <Dropdown multiple
                                selection
                                name="dietary_preference"
                                placeholder="Dietary preference"
                                options={[
                                    { text: "Gluten-free", value: "gluten-free" },
                                    { text: "Vegetarian", value: "vegetarian" },
                                    { text: "Vegan", value: "vegan" }
                                ]}

                                onChange={props.handleChange}
                            />
                        ) : (
                                <Input onChange={props.handleChange} name={props.item.name} value={props.item.value} />
                            )}

                    </Grid.Column>
                    <UserEditButton text={'Save'} item={props.item} handleClick={props.handleSubmit} />
                </Grid.Row>
            ) : (
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
                )}
        </Grid>
    )
}