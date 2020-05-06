import React from 'react';
import { Dropdown, Icon, Input, Grid } from 'semantic-ui-react';
import UserEditButton from './UserEditButton';

export default function UserEditActive(props) {

    return (
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
            <UserEditButton text={'Save'} item={props.item} handleClick={props.handleClick} />
        </Grid.Row>
    )
}