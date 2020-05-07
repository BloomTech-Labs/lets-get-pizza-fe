import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Icon, Input, Grid } from 'semantic-ui-react';
import { userEditSettings } from '../../../redux/actions/userActions';
import UserEditButton from './UserEditButton';

export default function UserEditActive({ item }) {
    const dispatch = useDispatch();
    const field = useSelector(({ user }) => user.field);

    const handleChange = (event, { value }) => {
        dispatch(userEditSettings(event, value))
    }

    return (
        <Grid.Row style={{ borderBottom: '1px solid lightgrey' }}>
            <Grid.Column style={{ display: 'flex', alignItems: 'center' }}>
                <Icon name={item.icon} size='large' />
                {field === 'dietary_preference' ? (
                    <Dropdown multiple
                        selection
                        name="dietary_preference"
                        placeholder="Dietary preference"
                        options={[
                            { text: "Gluten-free", value: "gluten-free" },
                            { text: "Vegetarian", value: "vegetarian" },
                            { text: "Vegan", value: "vegan" }
                        ]}

                        onChange={handleChange}
                    />
                ) : (
                        <Input
                            onChange={handleChange}
                            name={item.name} value={item.value} />
                    )}

            </Grid.Column>
            <UserEditButton text={'Save'} item={item} />
        </Grid.Row>
    )
}