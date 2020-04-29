import React, { useState } from 'react';
import { List, Image, Button, Icon, Input } from 'semantic-ui-react';
import { curr_user } from "../../../utils/auth";
import UserSettingsList from './UserSettingsList';
import UserEditButton from './UserEditButton';
import API from "../../../utils/API";



export default function UserSettings() {
    const [current, setCurrent] = useState('')
    const [user, setUser] = useState({ ...curr_user, dietary_preference: ['corn', 'pork', 'dairy'] });
    console.log(user)

    const handleSubmit = e => {
        setCurrent('')
    }

    const handleClick = e => {
        console.log(e.target)
        setCurrent(e.target.id)
        console.log(current)
    }

    const handleChange = e => {
        console.log(e.target)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const listItems = [
        { title: 'Email', name: 'email', icon: 'mail', value: user.email },
        { title: 'Location', name: 'display_location', icon: 'location arrow', value: user.display_location },
        { title: 'Favorite Toppings', name: 'favorite_pizza_toppings', icon: 'mail', value: user.favorite_pizza_toppings },
        { title: 'Dietary Preferences', name: 'dietary_preference', icon: 'ban', value: user.dietary_preference },
    ]

    return (
        <List divided relaxed='very'>
            {/* Top section with user avatar image & display name */}
            <List.Item style={{ display: "flex" }}>
                <List.Content>
                    {/* <Image avatar size={'tiny'} src={user.profile_image} /> */}
                    <Image avatar size={'tiny'} src={"http://place-puppy.com/1000x1000"} />
                </List.Content>
                <List.Content style={{ marginLeft: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <List.Content>
                        <List.Header>Display Name</List.Header>
                        <List.Description>{user.display_name}</List.Description>
                    </List.Content>
                    {current === 'Display Name' ? (
                        <List.Content style={{ display: 'flex' }}>
                            <Input onChange={handleChange}
                                name='display_name'
                                value={user.display_name}
                            />
                            <UserEditButton text={'Save'}
                                item={{ title: 'Display Name', icon: 'edit', value: user.display_name }}
                                handleClick={handleSubmit}
                            />
                        </List.Content>
                    ) : (
                            <UserEditButton text={'Edit'}
                                item={{ title: 'Display Name', icon: 'edit', value: user.display_name }}
                                handleClick={handleClick}
                            />
                        )}
                </List.Content>
            </List.Item>

            {listItems.map(item => <UserSettingsList current={current}
                user={user}
                handleChange={handleChange}
                item={item}
                handleClick={handleClick}
                handleSubmit={handleSubmit}
            />
            )}
        </List>
    )
} 